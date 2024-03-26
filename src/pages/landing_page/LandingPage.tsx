import { Box } from "@mui/material"
import landingPageStyles from "./LandingPage.Styles"
import weatherLogo from "../../assets/weatherNavLogo.png"
import { useState } from "react"
import Today from "../../components/today/Today"


const LandingPage = () => {
    const [currentActiveTab, setCurrentActiveTab] = useState<string>("Today");

    const tabsUnorderedListHandler = (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'LI') {
            const clickedTab = target.textContent;
            if (clickedTab) setCurrentActiveTab(clickedTab.trim());
        }
    };

    return (
        <Box sx={landingPageStyles.mainContainer}>
            <Box sx={landingPageStyles.firstNavContainer}>
                <Box sx={landingPageStyles.firstNavChildContainer}>
                    <Box component="img" alt="weather-nav-logo" sx={landingPageStyles.weatherNavLogo} src={weatherLogo} />
                </Box>
            </Box>
            <Box sx={landingPageStyles.secondNavChildContainer}>
                <Box component="ul" sx={landingPageStyles.tabsList} onClick={tabsUnorderedListHandler}>
                    <Box component="li" sx={{ ...landingPageStyles.tabListItem, ...(currentActiveTab === "Today" && landingPageStyles.activeListItemFunc()) }}>
                        Today
                    </Box>
                    <Box component="li" sx={{ ...landingPageStyles.tabListItem, ...(currentActiveTab === "Hourly" && landingPageStyles.activeListItemFunc()) }}>
                        Hourly
                    </Box>
                    <Box component="li" sx={{ ...landingPageStyles.tabListItem, ...(currentActiveTab === "10 Day" && landingPageStyles.activeListItemFunc()) }}>
                        10 Day
                    </Box>
                    <Box component="li" sx={{ ...landingPageStyles.tabListItem, ...(currentActiveTab === "Monthly" && landingPageStyles.activeListItemFunc()) }}>
                        Monthly
                    </Box>
                    <Box component="li" sx={{ ...landingPageStyles.tabListItem, ...(currentActiveTab === "Weekend" && landingPageStyles.activeListItemFunc()) }}>
                        Weekend
                    </Box>
                    <Box component="li" sx={{ ...landingPageStyles.tabListItem, ...(currentActiveTab === "Radar" && landingPageStyles.activeListItemFunc()) }}>
                        Radar
                    </Box>
                </Box>
            </Box>
            <Box sx={landingPageStyles.bodyContainer}>
                <Today />
            </Box>
        </Box>
    )
}


export default LandingPage