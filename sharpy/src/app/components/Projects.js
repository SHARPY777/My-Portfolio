import Image from "next/image";

function Experience() {
  const cardsData = [
    {
      name: "E-Commerce App User Interface",
      image: "/ui1.png",
      description: [
        "Intuitive Navigation: Clear category menus, search, and filters enhance user experience by swiftly guiding shoppers to desired products.",
        "Visual Appeal: High-quality images, consistent branding, and attractive colors create an engaging shopping atmosphere.",
        "Streamlined Checkout: Simplified forms, guest checkout, and progress indicators minimize friction, encouraging seamless purchases.",
        "Responsive Design: Compatibility across devices with responsive layouts and touch-friendly features enhances accessibility and engagement.",
      ],
    },
    {
      name: "Quality Walls Restaurant App",
      video: "/RestaurantApp.mp4",
      description: [
        "Sleek and Intuitive Design: Crafted a sleek and intuitive user interface(UI) for the Quality Walls Restaurant app, featuring modern design elements and smooth navigation paths, enhancing user engagement and satisfaction.",
        "Responsive Layout: Developed a responsive layout for the app, ensuring seamless accessibility and optimal viewing experience across various devices, including smartphones, tablets, and desktops, catering to a diverse user base.",
        "Eye - catching Visuals: Incorporated eye- catching visuals, including high - quality images of dishes, vibrant color schemes, and appealing typography, to captivate users' attention and stimulate their appetite, resulting in increased user retention and conversion rates.",
        "User - friendly Interaction: Implemented user - friendly interaction patterns, such as intuitive touch gestures, interactive menus, and quick access to essential features, facilitating effortless browsing and ordering processes, ultimately enhancing the overall user experience."
      ],
    },
    {
      name: "Netflix-Clone with Firebase Authentication",
      video: "/Netflix.mp4",

      description: [
        "Custom User Profiles: Implemented customizable user profiles within Firebase Authentication, allowing users to personalize their accounts with avatars, display names, and preferences for a tailored experience",
        "Firebase Authentication Integration: Seamlessly integrated Firebase authentication for secure user registration and login, ensuring user data privacy and authentication flow.",
        "Responsive Design: Developed a responsive design ensuring seamless user experience across various devices, from desktops to mobile devices, enhancing accessibility and usability.",
        "User-friendly Navigation: Implemented intuitive navigation patterns, including a familiar browsing interface with categories, genres, and personalized recommendations, allowing users to effortlessly discover and access content."
      ],
    },
    {
      name: "Food Delivery User Experience and User Interface",
      image: "/ui2.png",

      description: [
        "Visual Hierarchy: Utilizes a clear visual hierarchy with prominent call-to-action buttons for key actions such as placing an order, ensuring that users can easily navigate the interface and complete desired tasks.",

        "Consistent Branding: Maintains consistent branding elements throughout the UI, including logo placement, color scheme, and typography, reinforcing brand identity and creating a cohesive user experience.",
        "Responsive Design: Optimized for various devices, including smartphones, tablets, and desktops, ensuring consistent and intuitive user experience across different screen sizes and resolutions.",

        "Visual Appeal: Visually appealing interface with high-quality images of food items, vibrant color schemes, and intuitive navigation elements, enticing users and enhancing engagement with the platform."
      ],
    },
  ];


  return (
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-white text-2xl">
        Projects
      </h3>

      <div className="max-w-2lg mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-4 mt-8 mb-20">

        {cardsData.map((item, index) => (
          <div className="bg-purple-400 p-6 rounded-lg shadow-md mx-4 w-100 transform transition-transform hover:scale-125" key={index}>

            <div className="flex items-center justify-center" >
              {item.image && (
                <Image
                src={item.image}
                alt={item.name}
                width={500} // Specify the width of the image
        height={300} // Optionally specify the height of the image
                className="rounded-t-lg"
              />
              )}
              {item.video && (
                <video

                  src={item.video}
                  layout="fill"
                  controls
                />
              )}

            </div>
            <div className="mt-6">
              <h4 className="text-xl text-black font-bold ">{item.name}</h4>
              <ul className="text-lg text-black font-light text-left list-disc ">
                {item.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </>
  );
}

export default Experience;
