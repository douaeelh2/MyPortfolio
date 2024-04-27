const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold sm:text-[41px] text-[35px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center md:text-left",
  paragraph: "font-poppins font-normal text-gray-500 sm:text-[19px] text-[15px] leading-[30.8px] text-center md:text-left",

  heading2Center: "mb-4 font-poppins font-semibold sm:text-[41px] text-[35px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center",
  paragraphCenter: "mb-10 font-poppins font-normal text-gray-500 sm:text-[19px] text-[15px] leading-[30.8px] text-center",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-24 px-5",
  paddingY: "py-16",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col sm:gap-10 gap-2 mx-auto ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY} mt-10`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
