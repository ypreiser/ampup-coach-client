import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const AddUser = () => {
  const [users, setUsers] = useState([{ name: '', email: '', phone: '' }]);

  const handleAddUser = () => {
    setUsers([...users, { name: '', email: '', phone: '' }]);
  };

  const handleUserChange = (index: number, field: 'name' | 'email' | 'phone', value: string) => {
    const newUsers = [...users];
    newUsers[index][field] = value;
    setUsers(newUsers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission
    console.log(users);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3>Add User</h3>
      {users.map((user, index) => (
        <div key={index} className={styles.user}>
          <label>
            Name
            <Input
              type="text"
              value={user.name}
              onChange={(e) => handleUserChange(index, 'name', e.target.value)}
              required
              placeholder="Name"
            />
          </label>
          <label>
            Email
            <Input
              type="email"
              value={user.email}
              onChange={(e) => handleUserChange(index, 'email', e.target.value)}
              required
              placeholder="Email"
            />
          </label>
          <label>
            Phone
            <Input
              type="tel"
              value={user.phone}
              onChange={(e) => handleUserChange(index, 'phone', e.target.value)}
              required
              placeholder="Phone"
            />
          </label>
          <hr className={styles.hr} />
        </div>
      ))}
      <div className={styles.buttons}>
        <Button type="button" className={styles.addUser} onClick={handleAddUser}>
          <span>+</span> Add Another User
        </Button>
        <Button type="submit" className={styles.submitButton}>
          Add Users
        </Button>
      </div>
    </form>
  );
};

export default AddUser;
