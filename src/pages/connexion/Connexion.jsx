import React from 'react'
import '../inscription/_inscription.scss'
import Btn from '../../components/button/button'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { toast } from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'





export default function Connexion() {
    const navigate = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data.motDePass !== data.motDePassConfirmation) {
            toast.error("les mots de pass ne correspondent pas")
        } else {
            const postUser = async () => {
                try {

                    const getEmail = async () => axios.get(`http://localhost:4400/utilisateurs?mailUtilisateur=${data.mailUtilisateur}`);
                    const res = await getEmail();
                    if (res.data.length > 0) {
                        toast.error("un compte éxiste déjà avec cette compte")
                    } else {
                        const postData = axios.post("http://localhost:4400/utilisateurs", data);
                        toast.success("Inscription réussie");
                        navigate("/Connexion")
                    }


                } catch (error) {
                    console.error(error);
                    toast.error("une erreur est survenue")
                }
            }
            postUser();

        }

    };
    return (
        <div className='wrap'>
            <div className='card-inscription'>
                <h1 className='title'>Rsociaux</h1>

                <form className="card_forme" onSubmit={handleSubmit(onSubmit)}>

                    <TextField variant="outlined" fullWidth
                        size='small' label="veuillez saisir votre Adresse mail" type="email" {...register("mailUtilisateur", { required: "Veuillez saisir un email", pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" })}
                    />
                    <TextField variant="outlined" fullWidth
                        size='small' label="veuillez saisir un mot de passe" type="password"  {...register("motDePass", { required: "Veuillez saisir un mot de pass", minLength: { value: 6, message: "Veuilez saisir plus de 5 caracters" } })}
                    />


                    <div className='card_btn'>
                        <Btn text="Connexion" class="btn btn--green btn--sm" type="submit" />
                        <Link to="/inscription"><Btn text="Inscripition" class="btn btn--blue btn--sm" type="button" /></Link>
                    </div>
                </form>

            </div>
        </div>

    )
}
