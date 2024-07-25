import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

const AddUser = () => {
  const [users, setUsers] = useState([{ name: '', email: '', phone: '' }]);

  const handleAddUser = () => {
    setUsers([...users, { name: '', email: '', phone: '' }]);
  };

  const handleUserChange = (
    index: number,
    field: 'name' | 'email' | 'phone',
    value: string,
  ) => {
    const newUsers = [...users];
    newUsers[index][field] = value;
    setUsers(newUsers);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle form submission
    console.log(users);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addUserForm}>
      <h3>Add User</h3>
      {users.map((user, index) => (
        <div key={index} className={styles.user}>
          <label className={styles.userLabel}>
            Name
            <Input
              type="text"
              value={user.name}
              onChange={(e) => handleUserChange(index, 'name', e.target.value)}
              required
              placeholder="Name"
            />
          </label>
          <label className={styles.userLabel}>
            Email
            <Input
              type="email"
              value={user.email}
              onChange={(e) => handleUserChange(index, 'email', e.target.value)}
              required
              placeholder="Email"
            />
          </label>
          <label className={styles.userLabel}>
            Phone
            <Input
              type="tel"
              value={user.phone}
              onChange={(e) => handleUserChange(index, 'phone', e.target.value)}
              required
              placeholder="Phone"
            />
          </label>
          <hr className={styles.userHr} />
        </div>
      ))}
      <div className={styles.addUserButtons}>
        <button
          type="button"
          className={styles.addUserButton}
          onClick={handleAddUser}
        >
          <span>+</span> Add Another User
        </button>
        <Button type="submit" className="create">
          Add Users
        </Button>
      </div>
    </form>
  );
};

export default AddUser;
