// src\Pages\Store\NewPrize\NewPrize.tsx
import { useState } from 'react';
import { z } from 'zod';
import DOMPurify from 'dompurify';
import styles from './NewPrize.module.css';
import Button from '../../../components/Button/Button';
import { usePopupStore } from '../../../store';

// Define the schema
const prizeSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  price: z
    .number()
    .int('Must be an integer')
    .min(1, 'Price must be at least 1'),
  amountPerChallenge: z
    .number()
    .int('Must be an integer')
    .min(0, 'Cannot be negative'),
  dayToAvailability: z
    .number()
    .int('Must be an integer')
    .min(0, 'Cannot be negative'),
  personalPointToAvailability: z
    .number()
    .int('Must be an integer')
    .min(0, 'Cannot be negative'),
  groupPointsToAvailability: z
    .number()
    .int('Must be an integer')
    .min(0, 'Cannot be negative'),
  linkText: z.string().url('Must be a valid URL').or(z.literal('')).optional(),
  image: z.string().optional(),
});

type PrizeSchema = z.infer<typeof prizeSchema>;

interface PrizeState extends Omit<PrizeSchema, 'image'> {
  image?: File | null | string;
}

const NewPrize: React.FC = () => {
  const { setPopUp } = usePopupStore();
  const [errors, setErrors] = useState<
    Partial<Record<keyof PrizeState, string>>
  >({});

  const [prize, setPrize] = useState<PrizeState>({
    name: '',
    price: 0,
    amountPerChallenge: 0,
    dayToAvailability: 0,
    personalPointToAvailability: 0,
    groupPointsToAvailability: 0,
    linkText: undefined,
    image: undefined,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    let sanitizedValue: string | number = DOMPurify.sanitize(value);

    if (name === 'price' || name.includes('Availability')) {
      sanitizedValue = parseFloat(sanitizedValue) || 0;
    }

    setPrize({ ...prize, [name]: sanitizedValue });

    // Clear the error for this field
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024 * 1024) {
        // 5GB
        setErrors((prev) => ({
          ...prev,
          image: 'File size must be less than 5GB',
        }));
      } else {
        setPrize({ ...prize, image: file });
        setErrors((prev) => ({ ...prev, image: undefined }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const rawPrizeData = { ...prize };
      console.log('rawPrizeData', rawPrizeData);

      const result = prizeSchema.safeParse(rawPrizeData);
      if (result.success) {
        console.log('Validated prize:', result.data);
        setPopUp(null);
      } else {
        console.error('Validation failed:', result.error);
        // Handle validation errors
        const newErrors: Partial<Record<keyof PrizeState, string>> = {};
        result.error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0] as keyof PrizeState] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.uploadContainer}>
        <label htmlFor="fileUpload" className={styles.uploadLabel}>
          <div className={styles.uploadText}>Upload File</div>
          <div className={styles.uploadSubText}>
            We support PDF, JPG, PNG, SVG. <br /> All files must be no larger
            than 5.0 GB
          </div>
        </label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        {errors.image && <p className={styles.error}>{errors.image}</p>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={prize.name}
          onChange={handleChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={prize.price}
          onChange={handleChange}
        />
        {errors.price && <p className={styles.error}>{errors.price}</p>}
      </div>

      <div className={styles.small}>
        <div className={styles.inputContainer}>
          <label htmlFor="amountPerChallenge">Amount Per Challenge</label>
          <input
            type="number"
            id="amountPerChallenge"
            name="amountPerChallenge"
            value={prize.amountPerChallenge}
            onChange={handleChange}
          />
          {errors.amountPerChallenge && (
            <p className={styles.error}>{errors.amountPerChallenge}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="dayToAvailability">Days to Availability</label>
          <input
            type="number"
            id="dayToAvailability"
            name="dayToAvailability"
            value={prize.dayToAvailability}
            onChange={handleChange}
          />
          {errors.dayToAvailability && (
            <p className={styles.error}>{errors.dayToAvailability}</p>
          )}
        </div>
      </div>

      <div className={styles.small}>
        <div className={styles.inputContainer}>
          <label htmlFor="personalPointToAvailability">
            Personal Points to Availability
          </label>
          <input
            type="number"
            id="personalPointToAvailability"
            name="personalPointToAvailability"
            value={prize.personalPointToAvailability}
            onChange={handleChange}
          />
          {errors.personalPointToAvailability && (
            <p className={styles.error}>{errors.personalPointToAvailability}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="groupPointsToAvailability">
            Group Points to Availability
          </label>
          <input
            type="number"
            id="groupPointsToAvailability"
            name="groupPointsToAvailability"
            value={prize.groupPointsToAvailability}
            onChange={handleChange}
          />
          {errors.groupPointsToAvailability && (
            <p className={styles.error}>{errors.groupPointsToAvailability}</p>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="linkText">Link Text</label>
        <input
          type="text"
          id="linkText"
          name="linkText"
          value={prize.linkText || ''}
          onChange={handleChange}
        />
        {errors.linkText && <p className={styles.error}>{errors.linkText}</p>}
      </div>

      <Button className="create" type="submit">
        Create Card
      </Button>
    </form>
  );
};

export default NewPrize;
