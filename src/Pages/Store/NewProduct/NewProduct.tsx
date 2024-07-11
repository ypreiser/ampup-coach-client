import React, { ReactNode, useContext, useState } from 'react';
import styles from './NewProduct.module.css';
import Button from '../../../components/Button/Button';
import DataContext from '../../../context/DataContext';

const NewProduct: React.FC = () => {
  interface PopUpContent {
    title: string;
    component: ReactNode;
  }

  const { setPopUp } = useContext(DataContext) as {
    setPopUp: (content: PopUpContent | null) => void;
  };

  const [product, setProduct] = useState({
    name: '',
    price: 0,
    amountPerChallenge: 0,
    dayToAvailability: 0,
    personalPointToAvailability: 0,
    groupPointsToAvailability: 0,
    linkText: '',
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProduct({ ...product, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // todo: Handle form submission logic here
    console.log(product);
    setPopUp(null);

  };

  return (

    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.uploadContainer}>
        <label htmlFor="fileUpload" className={styles.uploadLabel}>
          <div className={styles.uploadText}>Upload File</div>
          <div className={styles.uploadSubText}>We support PDF, JPG, PNG, SVG. <br /> All files must be no larger than 5.0 GB</div>
        </label>
        <input type="file" id="fileUpload" onChange={handleFileChange} className={styles.fileInput} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Card Name</label>
        <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="price">Set Card Price</label>
        <input type="number" id="price" name="price" value={product.price} onChange={handleChange} />
      </div>
      <div className={styles.small}>

        <div className={styles.inputContainer}>
          <label htmlFor="amountPerChallenge">Amount per Challenge</label>
          <input type="number" id="amountPerChallenge" name="amountPerChallenge" value={product.amountPerChallenge} onChange={handleChange} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="dayToAvailability">Day to Availability</label>
          <input type="number" id="dayToAvailability" name="dayToAvailability" value={product.dayToAvailability} onChange={handleChange} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="personalPointToAvailability">Personal Point to Availability</label>
          <input type="number" id="personalPointToAvailability" name="personalPointToAvailability" value={product.personalPointToAvailability} onChange={handleChange} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="groupPointsToAvailability">Group Points to Availability</label>
          <input type="number" id="groupPointsToAvailability" name="groupPointsToAvailability" value={product.groupPointsToAvailability} onChange={handleChange} />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="linkText">Link/ Text</label>
        <input type="text" id="linkText" name="linkText" value={product.linkText} onChange={handleChange} />
      </div>
      <Button className='create' type="submit">Create Card</Button>
    </form>
  );
};

export default NewProduct;
