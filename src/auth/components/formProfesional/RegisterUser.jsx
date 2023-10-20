import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Button, Container, Stack, TextField, InputAdornment, Typography, InputLabel, MenuItem} from '@mui/material';
import { Google, LinkedIn } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import style from './StylesProfesional.module.css';

const RegisterUser = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = handleSubmit(data => {
        console.log(data);
        reset();
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container sx={{ pt: 4 }}>

            <Stack spacing={2} >
                <Button variant="contained" startIcon={<Google />} color="persianBlue" sx={{ width: '270px' }} >
                    Ingresar con Google
                </Button>
                <Button variant="outlined" startIcon={<LinkedIn />} color="persianBlue" sx={{ width: '270px' }}>
                    Ingresar con LinkedIn
                </Button>
            </Stack>
            <br />


            <form onSubmit={onSubmit}>
                <Stack spacing={2} >

                            <InputLabel>UserName</InputLabel>
                            <TextField
                                placeholder='UserName'
                                id='username'
                                type="text" sx={{width:'400px'}}
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido"
                                    },
                                    pattern: {
                                        value: /^(?!\s)[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+/,

                                        message: 'El nombre no es válido'
                                    }
                                })}
                            />
                            {errors.username && <p className={style.errorsP}>{errors.username.message}</p>}

                            <InputLabel>Email</InputLabel>
                            <TextField
                                sx={{width:'400px'}}
                                placeholder='Email'
                                variant="outlined"
                                type="email"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Es un campo obligatorio',
                                    },
                                    pattern: {
                                        value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                                        message: 'Email no válido',
                                    },
                                })}
                            />
                            {errors.email && <p className={style.errorsP}>{errors.email.message}</p>}

                            <InputLabel>Tipo de cuenta</InputLabel>
                            <TextField
                                sx={{width:'400px'}}
                                select
                                id='type'
                                name="type"
                                defaultValue="2"
                                {...register("type")}
                            >
                                <MenuItem value="2">Profesional</MenuItem>
                                <MenuItem value="3">Empresa</MenuItem>
                            </TextField>


                            <InputLabel>Contraseña</InputLabel>
                            <TextField
                                sx={{width:'400px'}}
                                placeholder='Contraseña'
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                {...register('contraseña', {
                                    required: {
                                        value: true,
                                        message: 'Es un campo obligatorio',
                                    },
                                    pattern: {
                                        value: /^(?=\S{6,}$)/,
                                        message: 'La contraseña debe contener al menos 6 carácteres, sin espacios en blanco',
                                    },
                                })}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button
                                                variant="text"
                                                color="persianBlue"
                                                size="small"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </Button>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {errors.contraseña && <p className={style.errorsP}>{errors.contraseña.message}</p>}

                            <Button variant="contained" color="pear" type="submit" sx={{ width: '140px'}}>
                                <Typography fontFamily="Nunito Sans" fontWeight="bold" color='persianBlue.main'>Ingresar </Typography>
                            </Button>
                </Stack>
            </form>
        </Container>
    );
}

export default RegisterUser 