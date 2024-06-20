import {
  Heading,
  Text,
  Box,
  Step,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepSeparator,
  StepIcon,
  Stepper,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuOptions from "../menu-options/MenuOptions";
import starIcon from "../../../assets/star.png";
import Footer from "../../home/footer/Footer";
import * as menuFooter from "../MenuFooter.module.scss";
import Shimmer from "../../../components/shimmer-effect/Shimmer";
import * as menuShimmerStyle from "../../../components/shimmer-effect/MenuShimmer.module.scss";

const Menubody = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState([]);
  const [menuOpt, setMenuOpt] = useState([]);

  useEffect(() => {
    getMenumenu();
  }, []);

  async function getMenumenu() {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await res.json();
      setMenu(data?.data?.cards);
      setMenuOpt(
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return menuOpt?.length === 0 ? (
    <Shimmer menuShimmerStyle={menuShimmerStyle} />
  ) : (
    <>
      <div className="card-menu">
        <Heading as="h2" size="lg" className="title-restau">
          {menu[0]?.card?.card?.text}
        </Heading>
        <Box mt="4" className="restau-desc">
          <Box mb="23px">
            <Heading size="md" className="title-of-card">
              <img src={starIcon} alt="rating" />
              {menu[2]?.card?.card?.info?.avgRating} (
              {menu[2]?.card?.card?.info?.totalRatingsString}) |{" "}
              {menu[2]?.card?.card?.info?.costForTwoMessage}
            </Heading>
            <Text py="2" className="cuisine">
              {menu[2]?.card?.card?.info?.labels[2]?.message}
            </Text>
          </Box>
          <Stepper
            orientation="vertical"
            h="70px"
            gap="0"
            mt="-40px"
            mb="-24px"
          >
            <Step className="stepper-container">
              <StepIndicator w="10px" h="10px">
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <Box flexShrink="0" fontSize="14px">
                <StepTitle className="stepper-card">
                  <Text fontSize="14px">Outlet</Text>{" "}
                  <Text fontWeight="500" fontSize="14px" color="gray.300">
                    {menu[2]?.card?.card?.info?.areaName}
                  </Text>
                </StepTitle>
              </Box>
              <StepSeparator />
            </Step>
            <Step className="stepper-container">
              <StepIndicator w="10px" h="10px">
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <Box flexShrink="0" fontSize="14px">
                <StepTitle fontSize="14px">
                  {menu[2]?.card?.card?.info?.sla?.slaString}
                </StepTitle>
              </Box>
              <StepSeparator />
            </Step>
          </Stepper>
          <hr style={{ marginBottom: "-19px" }}></hr>
          <Box>
            <Text className="dist-fees">
              {" "}
              {menu[2]?.card?.card?.info?.expectationNotifiers?.[0] &&
                menu[2]?.card?.card?.info?.expectationNotifiers[0]?.enrichedText?.replace(
                  /<[^>]*>/g,
                  ""
                )}
            </Text>
          </Box>
          <Box className="list-items" w="100%">
            {menuOpt?.map((item) => {
              if (item?.card?.card?.title) {
                return (
                  <MenuOptions
                    key={item?.card?.card?.id}
                    options={item?.card?.card}
                  />
                );
              }
            })}
          </Box>
          <Footer menuFooter={menuFooter} />
        </Box>
      </div>
    </>
  );
};

export default Menubody;
