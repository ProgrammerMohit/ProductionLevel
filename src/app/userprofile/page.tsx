"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../../components/ui/resizable-navbar";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { UserLandingPage } from "@/components/UserLandingPage";
import ContactForm from "@/components/ContactForm";

export default function NavbarDemo() {
  const navItems = [
    { name: "Courses", link: "#courses" },
    { name: "Upcoming Classes", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(true); // Toggle this based on real auth

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />

          <div className="flex items-center gap-4 relative">
            {userLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
                >
                  <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <FaUserCircle className="text-lg " />
                    My Account
                  </span>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50"
                    >
                      <a
                        href="#profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </a>
                      <a
                        href="#settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                      <button
                        onClick={() => {
                          setUserLoggedIn(false);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavbarButton variant="primary">Book a call</NavbarButton>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>

              {userLoggedIn ? (
                <NavbarButton
                  onClick={() => {
                    setUserLoggedIn(false);
                    setIsMobileMenuOpen(false);
                  }}
                  variant="secondary"
                  className="w-full"
                >
                  Logout
                </NavbarButton>
              ) : (
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
        {/* Kuch landing page type ka dena parega*/}
        <UserLandingPage />
        {/* <CourseCard/>*/}
        <div id="courses" className="scroll-mt-24">
          <CourseCard />
        </div>

        {/* Contact US */}
        <div id="contact">
              <ContactForm/>
        </div>
      </Navbar>
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <div className="container mx-auto p-8 pt-24">
//       <h1 className="mb-4 text-center text-3xl font-bold">
//         Check the navbar at the top of the container
//       </h1>
//       <p className="mb-10 text-center text-sm text-zinc-500">
//         For demo purpose we have kept the position as{" "}
//         <span className="font-medium">Sticky</span>. Keep in mind that this
//         component is <span className="font-medium">fixed</span> and will not
//         move when scrolling.
//       </p>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//         {[
//           {
//             id: 1,
//             title: "The",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 2,
//             title: "First",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 3,
//             title: "Rule",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 4,
//             title: "Of",
//             width: "md:col-span-3",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 5,
//             title: "F",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 6,
//             title: "Club",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 7,
//             title: "Is",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 8,
//             title: "You",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 9,
//             title: "Do NOT TALK about",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 10,
//             title: "F Club",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//         ].map((box) => (
//           <div
//             key={box.id}
//             className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
//           >
//             <h2 className="text-xl font-medium">{box.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
{
  /* <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
  Simple
</button> */
}
