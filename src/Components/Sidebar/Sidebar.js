
import './Sidebar.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutLined from "@material-ui/icons/ExpandMoreOutlined";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
// import {useStateValue} from "./StateProvider";
import {Users} from "../../dummyData"
import Closefriends from '../CloseFriends/Closefriends';

function Sidebar(){
    // const [{user}, dispatch] = useStateValue();
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <SidebarRow src={process.env.PUBLIC_URL + '/assets/Amina.PNG'} title = "Amina ELK"/>
                <SidebarRow Icon={DynamicFeedIcon} title = "Mon flux"/>
                <SidebarRow Icon={BookmarksIcon} title="Enregistrements"/>
                <SidebarRow Icon={PeopleIcon} title = "Groupes"/>
                <SidebarRow Icon={ChatIcon} title = "Messenger"/>
                <SidebarRow Icon={StorefrontIcon} title = "Marketplace"/>
                <SidebarRow Icon={VideoLibraryIcon} title = "Videos"/>
                <SidebarRow Icon={ExpandMoreOutLined} title = "More"/>
            </div>
            <div className="sidebar__bottom">
                    <ul className="sidebar__bottom_sidebarFriendList">
                        {Users.map((u)=> (
                            <Closefriends key={u.id} user={u}/>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default Sidebar;