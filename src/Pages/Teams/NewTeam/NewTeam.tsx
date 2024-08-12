import { useState } from 'react';
import { z } from 'zod';
import DOMPurify from 'dompurify';
import styles from './NewTeam.module.css';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const phoneSchema = z.union([
  z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'), // Valid phone number
  z.string().length(0), // Empty string
]);

const memberSchema = z
  .object({
    name: z.string().min(3, 'Name is required').optional(),
    email: z.string().email('Invalid email address').optional(),
    phone: phoneSchema.optional(),
  })
  .refine(
    (data) => {
      const isAnyFieldFilled = data.name || data.email || data.phone;
      if (isAnyFieldFilled) {
        return data.name && data.email;
      }
      return true;
    },
    {
      message: 'Name and Email are required if any member field is filled',
      path: ['name'],
    },
  );

const teamSchema = z.object({
  teamName: z.string().min(3, 'Team name must be at least 3 characters'),
  landingPageLink: z.string().optional(),
  landingPageTitle: z.string().optional(),
  members: z.array(memberSchema).optional(),
});

type TeamSchema = z.infer<typeof teamSchema>;

const NewTeam = () => {
  const [team, setTeam] = useState<TeamSchema>({
    teamName: '',
    landingPageLink: '',
    landingPageTitle: '',
    members: [], // Ensure members is always an array
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof TeamSchema, string>>
  >({});

  const handleInputChange = (
    field: keyof Omit<TeamSchema, 'members'>,
    value: string,
  ) => {
    const sanitizedValue = DOMPurify.sanitize(value);
    setTeam({ ...team, [field]: sanitizedValue });
    setErrors({ ...errors, [field]: undefined });
  };

  const handleAddMember = () => {
    setTeam({
      ...team,
      members: [...(team.members || []), { name: '', email: '', phone: '' }],
    });
  };

  const handleMemberChange = (
    index: number,
    field: keyof z.infer<typeof memberSchema>,
    value: string,
  ) => {
    const sanitizedValue = DOMPurify.sanitize(value);
    const newMembers = [...(team.members || [])];
    newMembers[index] = { ...newMembers[index], [field]: sanitizedValue };
    setTeam({ ...team, members: newMembers });
    setErrors({ ...errors, members: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      teamSchema.parse(team);
      console.log('Validated team:', team);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof TeamSchema, string>> = {};
        error.errors.forEach((err) => {
          if (err.path.length === 1) {
            newErrors[err.path[0] as keyof TeamSchema] = err.message;
          } else if (err.path[0] === 'members') {
            const memberIndex = err.path[1] as number;
            newErrors.members = `Issue with member #${memberIndex + 1}: ${err.message}`;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newTeamForm}>
      <label className={styles.teamNameLabel}>
        Team Name
        <Input
          type="text"
          value={team.teamName}
          onChange={(e) => handleInputChange('teamName', e.target.value)}
          required
          placeholder="Team Name"
        />
        {errors.teamName && (
          <span className={styles.error}>{errors.teamName}</span>
        )}
      </label>
      <label className={styles.joinLinkLabel}>
        Join Link
        <div className={styles.joinLink}>
          <span>www.AmpUp.pro/join/</span>
          <Input
            type="text"
            value={team.landingPageLink || ''}
            onChange={(e) =>
              handleInputChange('landingPageLink', e.target.value)
            }
            placeholder="Optional Link"
          />
        </div>
        {errors.landingPageLink && (
          <span className={styles.error}>{errors.landingPageLink}</span>
        )}
      </label>
      <Input
        type="text"
        value={team.landingPageTitle || ''}
        onChange={(e) => handleInputChange('landingPageTitle', e.target.value)}
        placeholder="Landing Page Title (Optional)"
      />
      {errors.landingPageTitle && (
        <span className={styles.error}>{errors.landingPageTitle}</span>
      )}
      <h3>Add Member</h3>
      {team.members?.map((member, index) => (
        <div key={index} className={styles.member}>
          <label className={styles.memberNameLabel}>
            Member Name
            <Input
              type="text"
              value={member.name || ''}
              onChange={(e) =>
                handleMemberChange(index, 'name', e.target.value)
              }
            />
          </label>
          <label className={styles.memberEmailLabel}>
            Email
            <Input
              type="email"
              value={member.email || ''}
              onChange={(e) =>
                handleMemberChange(index, 'email', e.target.value)
              }
            />
          </label>
          <label className={styles.memberPhoneLabel}>
            Phone
            <Input
              type="tel"
              value={member.phone || ''}
              onChange={(e) =>
                handleMemberChange(index, 'phone', e.target.value)
              }
            />
          </label>
          <hr className={styles.memberHr} />
        </div>
      ))}
      {errors.members && <span className={styles.error}>{errors.members}</span>}
      <div className={styles.buttonContainer}>
        <Button type="button" className="add" onClick={handleAddMember}>
          <span>+</span> Add Another User
        </Button>
        <Button type="submit" className="create">
          Create Team
        </Button>
      </div>
    </form>
  );
};

export default NewTeam;
