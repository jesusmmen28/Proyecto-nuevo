import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
//import { UserLinks } from "../components/UserLinks";
import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  console.log(user);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Hola {user.nombre}</h1>
      <section>
        <p>Tu ID de usuario es: {user.id}</p>
        <p>tu email es: {user.email}</p>
        <p>Te registraste {new Date(user.created_at).toLocaleString()}</p>
        <p>Escribe tu biografía: {user.biography}</p>
        <p>Pon aquí tu foto: {user.photo}</p>
        

      </section>
     {/*  <UserLinks id={user.id} /> */}
    </section>
  );
};
