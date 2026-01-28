import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { OOHeader } from "onlyoffice-react-ui-kit/header";
import "onlyoffice-react-ui-kit/header/css";
import PopupDocSpace from "../common/popup-docspace";
import AdventMobileOnly from "@components/screens/common/advent-mobile";
import languages from "@config/languages.json";

const Header = ({ t, locale, postUri }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modalClosed = localStorage.getItem("modalClosed");

    if (!modalClosed) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSearchFormSubmit = async (e) => {
    e.preventDefault();

    router.push(`/search?s=${searchQuery}`);
    return null;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("modalClosed", "true");
  };

  return (
    <>
      <AdventMobileOnly t={t} locale={locale}></AdventMobileOnly>
      {isModalOpen && (
        <PopupDocSpace onClose={handleCloseModal} locale={locale} t={t} />
      )}

      <OOHeader
        locale={locale}
        languages={languages.map((language) => ({
          key: language.shortKey === "zh-hans"
            ? "zh"
            : language.shortKey === "pt-br"
            ? "pt"
            : language.shortKey,
          shortKey: language.shortKey,
          name: language.longKey,
          href:
            router.pathname === "/[...post]"
              ? postUri[language.locale] && postUri[language.locale].split("/").slice(3).join("/") || "/"
              : router.pathname === "/onlyoffice-in-the-press" || router.pathname === "/search"
              ? router.asPath
              : "/"
        }))}
        search={{
          show: router.pathname === "/" || router.pathname === "/search" ? false : true,
          onSubmit: handleSearchFormSubmit,
          onChange: (e) => {
            e.preventDefault();
            setSearchQuery(e.target.value);
          },
          value: searchQuery,
          variant: "blog",
        }}
        base={{
          url: "https://www.onlyoffice.com",
          localePathMap: {
            "el": "",
            "hi": "",
            "ar": "",
            "hy": "",
            "zh-hans": "zh",
            "pt-br": "pt",
          }
        }}
        borderColor="#d9d9d9"
        backgroundColor="#ffffff"
        highlight={{
          buttonId: "oo-menu-item-btn-resources",
          linkId: "oo-menu-link-blog",
        }}
      />
    </>
  );
};

export default Header;
