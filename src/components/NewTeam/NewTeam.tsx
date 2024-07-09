import { useState } from 'react';
import styles from './NewTeam.module.css';

const NewTeam = () => {
    const [teamName, setTeamName] = useState('');
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
            <label>
                Team Name
                <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                />
            </label>
            <label>
                Join Link
                <div className={styles.joinLink}>
                    <span>www.AmpUp.pro/join/</span>
                    <input
                        type="text"
                        value={landingPageTitle}
                        onChange={(e) => setLandingPageTitle(e.target.value)}
                        required
                    />
                </div>
            </label>
            <h3>Add Member</h3>
            {members.map((member, index) => (
                <div key={index} className={styles.member}>
                    <label>
                        Name
                        <input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                        />
                    </label>
                    <label>
                        Email <span className={styles.required}>*</span>
                        <input
                            type="email"
                            value={member.email}
                            onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Phone
                        <input
                            type="tel"
                            value={member.phone}
                            onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                        />
                    </label>
                </div>
            ))}
            <div className={styles.buttons}>    
                <button type="button" className={styles.addMember} onClick={handleAddMember}>
                    <span>+</span>
                    Add Another User
                </button>
                <button type="submit" className={styles.createButton}>
                    Create Team
                </button>
            </div>
        </form>
    );
};

export default NewTeam;
