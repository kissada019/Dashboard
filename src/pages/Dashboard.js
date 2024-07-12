
// import '../assets/styles/App.css';
import '../assets/styles/dashboard.css'
import '../assets/styles/grid.css'
import {
    FaSearch, FaPlus, FaChevronDown, FaPencilAlt, FaTrashAlt, FaArrowUp, FaArrowDown, FaUserAlt, FaEnvelope
    , FaBell
} from "react-icons/fa";

function Dashboard() {


    function createMenu() {
        // Create the elements
        const outerDivElement = document.createElement("div");
        const innerDivElement = document.createElement("div");
        const menuItems = [
            { text: "Overview", active: true },
            { text: "Reports", active: false },
            { text: "Googlemap", active: false }
        ];

        // Add classes and attributes to outer div
        outerDivElement.classList.add("grid-flex", "grid-justify-end", "grid-width-100");

        // Add classes and attributes to inner div
        innerDivElement.classList.add("grid-flex", "grid-align-center", "grid-height-100");

        // Create and append menu items
        menuItems.forEach((menuItem, index) => {
            const menuItemElement = document.createElement("div");
            menuItemElement.classList.add("grid-flex", "grid-justify-center", "menu-item");
            menuItemElement.textContent = menuItem.text;
            menuItemElement.setAttribute("data-index", index);

            // Add active class if the menuItem is active
            if (menuItem.active) {
                menuItemElement.classList.add("menu-active");
            }

            // Append menuItemElement to inner div
            innerDivElement.appendChild(menuItemElement);
        });

        // Append inner div to outer div
        outerDivElement.appendChild(innerDivElement);

        // Append the outer div to the document body or any other desired location
        document.body.appendChild(outerDivElement);
    }

    // Call the function to create the menu

    // };
    return (
        <div className='grid-flex site-contact'>
            <div className="grid-flex grid-flex-1">

                <div className='area-1 grid-flex-2 pl-4 pt-2 pr-2 pb-4'>
                    <div className='grid-flex grid-justify-between'>
                        <div className="div-logo"></div>
                        <div className="grid-flex grid-width-100  ">
                            <div className="grid-flex grid-flex-1 grid-align-center grid-height-100 pr-2">
                                <div className="grid-flex grid-justify-end grid-width-100">
                                    <div className="grid-flex grid-align-center grid-height-100">
                                        <div className="grid-flex grid-justify-center menu-item menu-active">
                                            Overview
                                        </div>
                                        <div className="grid-flex grid-justify-center menu-item">
                                            Reports
                                        </div>
                                        <div className="grid-flex grid-justify-center menu-item">
                                            Googlemap
                                        </div>
                                    </div>
                                </div>
                                <div className='search grid-flex  grid-align-center grid-height-100'>
                                    <input className="input-search grid-width-100 grid-height-100 pl-2 pr-3" type="text" placeholder="Search Rooms" />
                                    <FaSearch className='icon-search' />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* switch tab  */}
                    <div className='switch-tab-x'>
                        {/* menu 1  */}
                        <div className='switch-tab-connect grid-flex grid-col'>

                            <div className="grid-flex grid-width-100 pt-3 pr-2">

                                <div className="main-dashboard grid-flex grid-flex-1 grid-justify-start">
                                    Main Dashboard
                                </div>
                                <div className="grid-flex grid-flex-1 grid-justify-end">
                                    <div className="manage-dropdown dropdown-overview grid-flex grid-align-center pr-0">
                                        Manage&nbsp;
                                        {/* <i className="fa fa-chevron-down" aria-hidden="true" style={{ color: "$459089" }}></i> */}
                                        <FaChevronDown style={{ color: "#459089" }} />
                                        {/* <div className="select-menu grid-flex grid-col">
                                            <div className="in-select-menu grid-flex grid-justify-between">Add <FaPlus /></div>
                                            <div className="in-select-menu grid-flex grid-justify-between">Edit <FaPencilAlt /></div>
                                            <div className="in-select-menu grid-flex grid-justify-between">Delete <FaTrashAlt /></div>
                                        </div> */}
                                    </div>
                                </div>

                            </div>

                            <div className="grid-flex grid-width-100 grid-align-center pt-1 pr-2">
                                <div className="grid-flex grid-align-center grid-justify-start grid-height-100">
                                    <div className="grid-flex grid-justify-center menu-dashboard-overview menu-dashboard-overview-first menu-active" data-index-small-menu-overview="0">
                                        Booking
                                    </div>
                                    <div className="grid-flex grid-justify-center menu-dashboard-overview" data-index-small-menu-overview="1">
                                        Amenities
                                    </div>
                                    <div className="grid-flex grid-justify-center menu-dashboard-overview" data-index-small-menu-overview="2">
                                        Customization
                                    </div>
                                    <div className="grid-flex grid-justify-center menu-dashboard-overview" data-index-small-menu-overview="3">
                                        Locality
                                    </div>
                                </div>
                            </div>

                            <div className="grid-flex grid-width-100 pt-2 pr-2">
                                <div className="grid-flex grid-flex-4">
                                    <div className="grid-flex grid-col">
                                        <div className="grid-flex grid-flex-1 mr-1">
                                            <div className="graph-revenue grid-flex-1 mr-1 p-1">
                                                <div className="grid-flex grid-col">
                                                    <div className="text-revenue grid-flex">
                                                        Today's earning
                                                    </div>
                                                    <div className="grid-flex">
                                                        $2890
                                                    </div>
                                                    <div className="grid-flex pt-1">
                                                        <img src={require('../assets/images/graph.png')} style={{ width: "95px", height: "30px" }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="demographics grid-flex grid-flex-1 grid-justify-center grid-align-center p-1">
                                                <div className="grid-flex grid-col">
                                                    <div className="grid-flex text-demographics">
                                                        Demographics
                                                    </div>
                                                    <div className="grid-flex number-demographics grid-justify-center">
                                                        20
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid-flex grid-flex-1">
                                            <div className="grid-flex per-off grid-width-100 mt-1 mr-1"
                                                style={{ paddingBottom: "3px" }}>
                                                <div className="grid-flex grid-flex-2 grid-width-100 pl-1">
                                                    <div className="grid-flex grid-col grid-align-center grid-justify-center">
                                                        <div className="header-text-peroff grid-flex">
                                                            20% OFF
                                                        </div>
                                                        <div className="text-under-header-peroff grid-flex">
                                                            On your first booking
                                                        </div>
                                                        <div className="grid-flex">
                                                            <div className="code-peroff">
                                                                NEWBIE20
                                                            </div>
                                                        </div>
                                                        <div className="text-peroff grid-flex grid-justify-center"
                                                            style={{ marginLeft: "-3px" }}>
                                                            COPY CODE
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid-flex grid-flex-3 grid-width-100">
                                                    <img src={require('../assets/images/per-off.png')} alt='Graph' style={{ width: "100%", height: "100%" }} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="grid-flex grid-flex-3 mr-1">
                                    <div className="img-building grid-width-100 grid-height-100">
                                        <div className="circle-arrow grid-flex grid-align-center grid-justify-center">
                                            <FaArrowUp style={{ color: "#c5d7dc", transform: "roatate(41deg)" }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-flex grid-flex-2">
                                    <div className="grid-flex grid-col grid-width-100">
                                        <div className="total-balance grid-flex">
                                            <div className="grid-flex grid-col">
                                                <div className="text-revenue grid-flex" style={{ position: "relative" }} >
                                                    Today's earning
                                                    <div className="div-icon-arrow-up">
                                                        <FaArrowUp aria-hidden />
                                                    </div>
                                                </div>

                                                <div className="grid-flex" style={{ marginTop: "-2px" }}>
                                                    $2890
                                                </div>
                                                <div className="field-border-dashed grid-flex">
                                                    <div className="field-fly grid-flex">
                                                        <div className="grid-flex grid-col">
                                                            <div className="text-today-bookings grid-flex">
                                                                Today's Bookings
                                                            </div>
                                                            <div className="icon-circle grid-flex grid-align-center grid-justify-center">
                                                                <div className="icon-in-circle">

                                                                </div>
                                                            </div>
                                                            <div className="number-today-bookings grid-flex">
                                                                24
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-revenue grid-flex mt-1" style={{ zIndex: 1 }}>
                                                    Total Balance
                                                </div>
                                                <div className="grid-flex" style={{ position: "relative", marginTop: "-2px" }} >
                                                    $2M
                                                    <div className="div-icon-arrow-down">
                                                        {/* <i className="fa fa-arrow-down" aria-hidden="true"></i> */}
                                                        <FaArrowDown />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="design-meeting grid-flex grid-col mt-1">
                                            <div className="text-header-design grid-flex">
                                                Design Meetings
                                            </div>
                                            <div className="text-design grid-flex">
                                                11 Min Left
                                            </div>
                                            <div className="object-white grid-flex">
                                            </div>
                                            <div className="grid-flex" style={{ paddingTop: "4px" }}>
                                                <div className="grid-flex grid-flex-1 grid-width-100 grid-justify-start">
                                                    <div className="circle circle-user-1 grid-flex grid-justify-center grid-align-center">
                                                        <FaUserAlt />
                                                    </div>
                                                    <div className="circle circle-number grid-flex grid-justify-center grid-align-center">
                                                        08
                                                    </div>
                                                </div>
                                                <div className="grid-flex grid-flex-1 grid-width-100 grid-justify-end">
                                                    <div className="circle circle-arrow-design grid-flex grid-justify-center grid-align-center"
                                                        style={{ background: "#fdbc0c" }} >
                                                        {/* <i className="fa fa-arrow-up" aria-hidden="true"
                                                            style="transform: rotate(41deg);color: white"></i> */}
                                                        <FaArrowUp style={{ transform: "rotate(41deg)", color: "white" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="grid-flex grid-width-100 grid-align-center pt-1 pb-1 pr-2">

                                <div className="active-bookings grid-flex grid-flex-1 grid-justify-start">
                                    Active Bookings
                                </div>
                                <div className="check-all grid-flex grid-flex-1 grid-justify-end">
                                    Check All &#62;
                                </div>
                            </div>


                            <div className="grid-flex grid-width-100 pr-2">
                                <div className="grid-flex grid-flex-1 grid-justify-start">
                                    <div className="grid-flex grid-flex-1 grid-width-100">
                                        <div className="award-ceremony grid-flex grid-col grid-width-89">
                                            <div className="grid-flex grid-align-center" style={{ padding: "3px 0" }}>
                                                <div className="grid-flex grid-flex-3 grid-justify-start">
                                                    <div className="text-header-award">
                                                        Award Ceremony
                                                    </div>
                                                </div>

                                                <div className="grid-flex grid-flex-1 grid-justify-end">
                                                    <div className="fake-checkbox grid-flex grid-justify-end">
                                                        <div className="in-fake-checkbox">

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="text-time" style={{ padding: "3px 0" }} >
                                                12:30 - 15:45
                                            </div>
                                            <div className="grid-flex" style={{ padding: "3px 0" }}>
                                                <div className="style-button button-team grid-flex grid-justify-center grid-align-center">
                                                    Team
                                                </div>
                                                <div className="style-button button-meeting grid-flex grid-justify-center grid-align-center">
                                                    Meeting
                                                </div>
                                            </div>
                                            <div className="grid-flex" style={{ paddingTop: "4px" }} >
                                                <div className="grid-flex grid-flex-1 grid-width-100 grid-justify-start">
                                                    <div className="circle circle-user-booking grid-flex grid-justify-center grid-align-center">
                                                        {/* <i class="fas fa-user fa-2x" aria-hidden="true"></i> */}
                                                        <FaUserAlt />
                                                    </div>
                                                    <div className="circle circle-user-booking grid-flex grid-justify-center grid-align-center">
                                                        {/* <i class="fas fa-user fa-2x" aria-hidden="true"></i> */}
                                                        <FaUserAlt />
                                                    </div>
                                                    <div className="circle circle-number-bookings grid-flex grid-justify-center grid-align-center">
                                                        + 9
                                                    </div>
                                                </div>
                                                <div className="grid-flex grid-flex-1 grid-width-100 grid-justify-end grid-align-center">
                                                    <div className="circle-edit-design grid-flex grid-justify-center grid-align-center">
                                                        {/* <i class="fas fa-pencil-alt" aria-hidden="true"></i> */}
                                                        <FaPencilAlt aria-hidden="true" />
                                                    </div>
                                                    <div className="circle-arrow-design grid-flex grid-justify-center grid-align-center">
                                                        {/* <i class="fa fa-arrow-up" aria-hidden="true"
                                                            style="transform: rotate(41deg);color: white"></i> */}
                                                        <FaArrowUp style={{ transform: "rotate(41deg)", color: "white" }} aria-hidden="true" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="grid-flex grid-flex-1 grid-justify-end grid-width-100">
                                    <div className="design-discussion grid-flex grid-col grid-width-89">
                                        <div className="grid-flex grid-align-center" style={{ padding: "3px 0" }}>
                                            <div className="grid-flex grid-flex-3 grid-justify-start">
                                                <div className="text-header-award">
                                                    Design Discussion
                                                </div>
                                            </div>
                                            <div className="grid-flex grid-flex-1 grid-justify-end">
                                                <div className="fake-checkbox grid-flex grid-justify-end">
                                                    <div className="in-fake-checkbox">

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="text-time" style={{ padding: "3px 0" }}>
                                            16:30 - 20:00
                                        </div>
                                        <div className="grid-flex" style={{ padding: "3px 0" }}>
                                            <div className="style-button button-team grid-flex grid-justify-center grid-align-center">
                                                Team
                                            </div>
                                            <div className="style-button button-meeting grid-flex grid-justify-center grid-align-center">
                                                Meeting
                                            </div>
                                        </div>
                                        <div className="grid-flex" style={{ paddingTop: "4px" }} >
                                            <div className="grid-flex grid-flex-1 grid-width-100 grid-justify-start">
                                                <div className="circle circle-user-booking grid-flex grid-justify-center grid-align-center">
                                                    {/* <i class="fas fa-user fa-2x" aria-hidden="true"></i> */}
                                                    <FaUserAlt />
                                                </div>
                                                <div className="circle circle-user-booking grid-flex grid-justify-center grid-align-center">
                                                    {/* <i class="fas fa-user fa-2x" aria-hidden="true"></i> */}
                                                    <FaUserAlt />
                                                </div>
                                                <div className="circle circle-number-bookings grid-flex grid-justify-center grid-align-center">
                                                    + 9
                                                </div>
                                            </div>
                                            <div className="grid-flex grid-flex-1 grid-width-100 grid-justify-end grid-align-center">
                                                <div className="circle-edit-design grid-flex grid-justify-center grid-align-center">
                                                    {/* <i class="fas fa-pencil-alt" aria-hidden="true"></i> */}
                                                    <FaPencilAlt aria-hidden="true" />
                                                </div>
                                                <div className="circle-arrow-design grid-flex grid-justify-center grid-align-center">
                                                    {/* <i class="fa fa-arrow-up" aria-hidden="true"
                                                            style="transform: rotate(41deg);color: white"></i> */}
                                                    <FaArrowUp style={{ transform: "rotate(41deg)", color: "white" }} aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>
                </div>
                <div className='area-2 grid-flex grid-col grid-flex-1 pl-1 pt-2 pr-2 pb-2 '>
                    <div className="header-area-2 grid-flex pr-2">
                        <div className="grid-flex grid-flex-1 pt-1">
                            <div className="header-icon-mail grid-flex grid-justify-center grid-align-center ml-2">
                                {/* <i className="far fa-envelope" aria-hidden="true" style={{fontSize: "18px"}} </i> */}

                                <FaEnvelope aria-hidden="true" style={{ fontSize: "18px" }} />
                                <div className="mail grid-flex grid-col">
                                    No detail
                                </div>
                                <div className="point-on-icon-letter">
                                </div>

                            </div>
                            <div className="header-icon-notification grid-flex grid-justify-center grid-align-center">
                                {/* <i class="far fa-bell" aria-hidden="true" style="font-size: 18px"></i> */}
                                <FaBell aria-hidden="true" style={{ fontSize: "18px" }} />
                                <div className="notification grid-flex grid-col">
                                    No detail
                                </div>
                                <div className="point-on-icon-bell">
                                </div>
                            </div>
                        </div>
                        <div className="grid-flex grid-flex-2 grid-justify-end grid-align-center">
                            <div className="data-user mr-1">
                                <div className="grid-flex grid-col grid-align-end">
                                    <div className="name-user grid-flex">
                                        Passakorn P.
                                    </div>
                                    <div className="type-user grid-flex">
                                        Super Admin
                                    </div>
                                </div>

                            </div>
                            <div className="img-profile grid-flex grid-align-center grid-justify-center">
                                {/* <i class="fas fa-user fa-3x" aria-hidden="true"></i> */}
                                <FaBell aria-hidden="true" />
                            </div>
                        </div>
                    </div>

                    <div className="calendar-x grid-flex grid-col grid-flex-1">
                    </div>

                </div>

            </div>
        </div>

    )

}

export default Dashboard;
