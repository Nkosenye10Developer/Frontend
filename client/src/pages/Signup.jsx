import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getAllCity } from '../api/cityApi';
import { getAllProvince } from '../api/provinceApi';
import { createCustomer} from '../api/userApi';
import { createBusiness } from '../api/userApi'; // Assuming you have a business API

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    cellNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    idNumber: '',
    provinceId: '',
    cityId: '',
    referralCode: '', // for customer
    businessName: '', // for business
    businessDescription: '',
    businessCategory: ''
  });

  const [userType, setUserType] = useState('customer');
  const [cities, setCities] = useState({ $values: [] });
  const [provinces, setProvinces] = useState({ $values: [] });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityRes = await getAllCity();
        const provinceRes = await getAllProvince();
        setCities(cityRes);
        setProvinces(provinceRes);
      } catch (error) {
        toast.error('Failed to load location data.');
      }
    };
    fetchData();
  }, []);

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const user = {
      name: formData.name,
      surname: formData.surname,
      cellNumber: formData.cellNumber,
      email: formData.email,
      password: formData.password,
      idNumber: formData.idNumber,
      provinceId: parseInt(formData.provinceId, 10),
      cityId: parseInt(formData.cityId, 10)
    };

    let payload;
    if (userType === 'customer') {
      payload = {
        user,
        referralCode: formData.referralCode || ''
      };
    } else {
      payload = {
        user,
        name: formData.businessName,
        description: formData.businessDescription,
        category: formData.businessCategory
      };
    }

    setIsLoading(true);
    try {
      console.log('Payload sent to API:', payload);
     


      if( userType === 'customer') {
        await createCustomer(payload);

        toast.success('Account created successfully!');
        navigate('/login');
      }else if(userType === 'business')
      {
      
        await createBusiness(payload);

        toast.success('Account created successfully!');
        navigate('/login');
      }
    
    } catch (error) {
      console.error(error);
      toast.error('Signup failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <label>User Type:</label>
      <select name="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="business">Business</option>
      </select>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="surname"
        placeholder="Surname"
        value={formData.surname}
        onChange={handleChange}
        required
      />
      <input
        name="cellNumber"
        placeholder="Cell Number"
        value={formData.cellNumber}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <input
        name="idNumber"
        placeholder="ID Number"
        value={formData.idNumber}
        onChange={handleChange}
        required
      />

      <select
        name="provinceId"
        value={formData.provinceId}
        onChange={handleChange}
        required
      >
        <option value="">Select Province</option>
        {provinces.$values.map((province) => (
          <option key={province.provinceId} value={province.provinceId}>
            {province.name}
          </option>
        ))}
      </select>

      <select
        name="cityId"
        value={formData.cityId}
        onChange={handleChange}
        required
      >
        <option value="">Select City</option>
        {cities.$values.map((city) => (
          <option key={city.cityId} value={city.cityId}>
            {city.name}
          </option>
        ))}
      </select>

      {userType === 'customer' && (
        <input
          name="referralCode"
          placeholder="Referral Code (Optional)"
          value={formData.referralCode}
          onChange={handleChange}
        />
      )}

      {userType === 'business' && (
        <>
          <input
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
          <input
            name="businessDescription"
            placeholder="Description"
            value={formData.businessDescription}
            onChange={handleChange}
            required
          />
          <input
            name="businessCategory"
            placeholder="Category"
            value={formData.businessCategory}
            onChange={handleChange}
            required
          />
        </>
      )}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
}

export default Signup;
