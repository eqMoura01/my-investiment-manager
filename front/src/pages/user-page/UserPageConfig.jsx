import Header from "../../components/header/Header";
import UserConfig from "../../components/user-page-config/UserConfig";
import "./UserPageStyle.css";

const UserPage = () => {
    return (

        <div className="Home" >
            <Header />
            <div className="user-config">
                <UserConfig />
            </div>
        </div>


    );


}

export default UserPage;
