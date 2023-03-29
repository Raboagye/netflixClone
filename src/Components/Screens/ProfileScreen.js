import classes from "./ProfileScreen.module.css"
import NavBar from "../NavBar";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";


const ProfileScreen = () => {
    const user = useSelector((state)=> state.user.user)
    return ( 
        <div className={classes.Container}>
            <NavBar />
            <div className={classes.Profile_Content}>
                <h1>Edit Profile</h1>
                <div className={classes.Avatar_Subscriptions}>
                    <img className={classes.Avatar} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                    <div className={classes.Subscriptions}>
                        <div className={classes.Email_Container}>
                            <h4 className={classes.email}>{user.email}</h4>
                        </div>
                        <h2>Plans (Current Plan: premium)</h2>
                        <h4 className={classes.Date}>Renewal Date: 04/11/2023</h4>
                        <div className={classes.All_Subscription}>
                            <div className={classes.Subscribe}>
                                <div className={classes.Subscribe_details}>
                                    <h4>Netflix Standard</h4>
                                    <h4>1080p</h4>
                                </div>
                                <div className={classes.Button}>
                                    <button className={classes.Button_Subscribe}>Subscribe</button>
                                </div>
                            </div>
                            <div className={classes.Subscribe}>
                                <div className={classes.Subscribe_details}>
                                    <h4>Netflix Basic</h4>
                                    <h4>480p</h4>
                                </div>
                                <div className={classes.Button}>
                                    <button className={classes.Button_Subscribe}>Subscribe</button>
                                </div>
                                
                            </div>
                            <div className={classes.Subscribe}>
                                <div className={classes.Subscribe_details}>
                                    <h4>Netflix Premium</h4>
                                    <h4>4k + HDR</h4>
                                </div>
                                <div className={classes.Button}>
                                    <button className={classes.Button_currentPlan}>Current Package</button>
                                </div>
                            </div>

                        </div>
                        <button className={classes.signOut} onClick={()=>auth.signOut()}>Sign out</button>
                        
                    </div>

                </div>
            </div>
            
        </div>
     );
}
 
export default ProfileScreen;