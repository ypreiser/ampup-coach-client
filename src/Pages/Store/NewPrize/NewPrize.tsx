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
  price: z.number().positive('Price must be positive'),
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
  linkText: z.string().url('Must be a valid URL'),
});

type PrizeSchema = z.infer<typeof prizeSchema>;

interface PrizeState extends PrizeSchema {
  image: File | null;
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
    linkText: '',
    image: null,
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
      const prizeData = { ...prize };
      // delete prizeData.image;  // Remove image from validation
      prizeSchema.parse(prizeData);
      // If we get here, validation passed
      console.log('Validated prize:', prize);
      setPopUp(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof PrizeState, string>> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0] as keyof PrizeState] = err.message;
          }
        });
        setErrors(newErrors);
      }
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

      {(Object.keys(prize) as Array<keyof PrizeState>).map(
        (key) =>
          key !== 'image' && (
            <div key={key} className={styles.inputContainer}>
              <label htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type={typeof prize[key] === 'number' ? 'number' : 'text'}
                id={key}
                name={key}
                value={prize[key].toString()}
                onChange={handleChange}
              />
              {errors[key] && <p className={styles.error}>{errors[key]}</p>}
            </div>
          ),
      )}

      <Button className="create" type="submit">
        Create Card
      </Button>
    </form>
  );
};

export default NewPrize;
