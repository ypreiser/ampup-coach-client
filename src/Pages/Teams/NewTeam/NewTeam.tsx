import { useState } from 'react';
import styles from './NewTeam.module.css';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const NewTeam = () => {
    const [teamName, setTeamName] = useState('');
    const [landingPageLink, setLandingPageLink] = useState('');
    const [landingPageTitle, setLandingPageTitle] = useState('');
    const [members, setMembers] = useState([{ name: '', email: '', phone: '' }]);

    const handleAddMember = () => {
        setMembers([...members, { name: '', email: '', phone: '' }]);
    };

    const handleMemberChange = (index: number, field: 'name' | 'email' | 'phone', value: string) => {
        const newMembers = [...members];
        newMembers[index][field] = value;
        setMembers(newMembers);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //todo: handle form submission
        console.log({ teamName, landingPageTitle, members });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.newTeamForm}>
          <label className={styles.teamNameLabel}>
            Team Name
            <Input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
              placeholder="Team Name"
            />
          </label>
          <label className={styles.joinLinkLabel}>
            Join Link
            <div className={styles.joinLink}>
              <span>www.AmpUp.pro/join/</span>
              <Input
                type="text"
                value={landingPageLink}
                onChange={(e) => setLandingPageLink(e.target.value)}
                required
              />
            </div>
          </label>
          <Input
            type="text"
            value={landingPageTitle}
            onChange={(e) => setLandingPageTitle(e.target.value)}
            required
            placeholder="Landing Page Title"
          />
          <h3>Add Member</h3>
          {members.map((member, index) => (
            <div key={index} className={styles.member}>
              <label className={styles.memberNameLabel}>
                Name
                <Input
                  type="text"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                />
              </label>
              <label className={styles.memberEmailLabel}>
                Email
                <Input
                  type="email"
                  value={member.email}
                  onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                  required
                />
              </label>
              <label className={styles.memberPhoneLabel}>
                Phone
                <Input
                  type="tel"
                  value={member.phone}
                  onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                />
              </label>
              <hr className={styles.memberHr} />
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <Button type="button" className='add' onClick={handleAddMember}>
              <span>+</span> Add Another User
            </Button>
            <Button type="submit" className='create'>
              Create Team
            </Button>
          </div>
        </form>
      );
    };
    
    export default NewTeam;