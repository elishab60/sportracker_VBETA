import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
`;

const Button = styled.button`
  background: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const UserForm: React.FC = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Here you can handle the form submission, e.g., send data to your backend
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="sex">Sexe</Label>
                <Select id="sex" {...register('sex')}>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                </Select>

                <Label htmlFor="height_metric">Taille (cm)</Label>
                <Input id="height_metric" type="number" step="0.01" {...register('height_metric')} />

                <Label htmlFor="height_imperial">Taille (inches)</Label>
                <Input id="height_imperial" type="number" step="0.01" {...register('height_imperial')} />

                <Label htmlFor="weight_metric">Poids (kg)</Label>
                <Input id="weight_metric" type="number" step="0.01" {...register('weight_metric')} />

                <Label htmlFor="weight_imperial">Poids (lbs)</Label>
                <Input id="weight_imperial" type="number" step="0.01" {...register('weight_imperial')} />

                <Label htmlFor="birth_date">Date de naissance</Label>
                <Input id="birth_date" type="date" {...register('birth_date')} />

                <Label htmlFor="goal">Objectif</Label>
                <Select id="goal" {...register('goal')}>
                    <option value="perte de poids">Perte de poids</option>
                    <option value="maintien">Maintien</option>
                    <option value="prise de masse">Prise de masse</option>
                </Select>

                <Label htmlFor="goal_weight_metric">Objectif de poids (kg)</Label>
                <Input id="goal_weight_metric" type="number" step="0.01" {...register('goal_weight_metric')} />

                <Label htmlFor="goal_weight_imperial">Objectif de poids (lbs)</Label>
                <Input id="goal_weight_imperial" type="number" step="0.01" {...register('goal_weight_imperial')} />

                <Label htmlFor="weekly_weight_gain_metric">Gain de poids hebdomadaire (kg)</Label>
                <Input id="weekly_weight_gain_metric" type="number" step="0.01" {...register('weekly_weight_gain_metric')} />

                <Label htmlFor="weekly_weight_gain_imperial">Gain de poids hebdomadaire (lbs)</Label>
                <Input id="weekly_weight_gain_imperial" type="number" step="0.01" {...register('weekly_weight_gain_imperial')} />

                <Button type="submit">Enregistrer</Button>
            </form>
        </FormContainer>
    );
};

export default UserForm;