import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { Button, TextField, Typography } from "@mui/material";

function SignUpPage() {
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const { signIn } = useAction();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            signIn(formData);
            navigate("/"); // Перенаправлення на MainPage
        } else {
            alert("Паролі не співпадають!");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <Typography variant="h4" gutterBottom>Реєстрація</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Ім'я користувача"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Ім'я"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Призвище"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Електронна пошта"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Пароль"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Підтвердження паролю"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    type="password"
                    fullWidth
                    required
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Зареєструватись
                </Button>
            </form>
        </div>
    );
}

export default SignUpPage;