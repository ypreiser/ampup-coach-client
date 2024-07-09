import { useState } from 'react';
import styles from './NewTeam.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

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
        <form onSubmit={handleSubmit} className={styles.form}>
            <label >
                Team Name
                <Input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                    placeholder="Team Name"
                    label=""
                />
            </label>
            <label>
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
                    <label>
                        Name
                        <Input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                        />
                    </label>
                    <label>
                        Email
                        <Input
                            type="email"
                            value={member.email}
                            onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Phone
                        <Input
                            type="tel"
                            value={member.phone}
                            onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                        />
                    </label>
                    <hr className={styles.hr} />
                </div>
            ))}
            <div className={styles.buttons}>
                <Button type="button" className={styles.addMember} onClick={handleAddMember}>
                    <span>+</span> Add Another User
                </Button>
                <Button type="submit" className={styles.createButton}>
                    Create Team
                </Button>
            </div>
        </form>
    );
};

export default NewTeam;
