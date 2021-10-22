import * as React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import { CategoryBarStyle } from "./CategoryBar.styles";
import { IoSearch } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
// Helper
import { classes } from "global/helpers";

// Types
import { CatType } from "types";

type CatProps = {
  categories: CatType[];
  setCatData: React.Dispatch<React.SetStateAction<CatType[]>>;
};

SwiperCore.use([Navigation]);

const CategoryBar = ({ categories, setCatData }: CatProps) => {
  const [isOpenSearch, setIsOpenSearch] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);
  const searchInput = React.useRef<HTMLInputElement>(null);

  const showHideSearch = (value: boolean) => {
    setIsOpenSearch(value);
  };

  const handleClickCategory = (
    el: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const swiper = (document.querySelector(".swiper") as any).swiper;
    let clickedItem = (el.target as HTMLElement).closest(".cat-item")!;
    let catAnchorID = clickedItem.getAttribute("data-cat-anchor-id")!;
    let meals = document.querySelectorAll(".meals-group");
    let boundTop = 65;
    let cloneCats = [...categories];

    for (let category of cloneCats) {
      if (category.code === catAnchorID) {
        category.isSelected = true;
      } else {
        category.isSelected = false;
      }
    }
    setCatData(cloneCats);

    // slide to category selected
    swiper.slideTo(swiper.clickedIndex, 300);

    // scroll to element
    for (let i = 0; i < meals.length; i++) {
      let mealAnchorID = meals[i].getAttribute("data-meal-anchor-id");

      if (catAnchorID === mealAnchorID) {
        let mealTop = (meals[i] as HTMLElement).offsetTop;
        window.scroll({
          top: mealTop - boundTop,
        });
      }
    }

    //handle click at last slide
    if (
      swiper.isEnd &&
      swiper.snapIndex !== swiper.activeIndex &&
      swiper.clickedSlide.classList.contains("swiper-slide-active")
    ) {
      swiper.slidePrev();
    }
  };

  const detectCategory = () => {
    const swiper = document.querySelector(".swiper") as any;

    if (swiper) {
      let meals = document.querySelectorAll(".meals-group") as any;
      let boundTop = 66;
      let cloneCats = [...categories];

      // detect meal element
      for (let item of meals) {
        let mealTop = item.getBoundingClientRect().top;
        let mealAnchorID = item.getAttribute("data-meal-anchor-id")!;

        if (mealTop < boundTop) {
          for (let category of cloneCats) {
            if (category.code === mealAnchorID) {
              category.isSelected = true;
            } else {
              category.isSelected = false;
            }
          }
        }
      }
      setCatData(cloneCats);

      // slide to category selected
      let selectedIndex = cloneCats.findIndex((el) => el.isSelected);
      swiper.swiper.slideTo(selectedIndex, 300);
    }
  };

  React.useEffect(() => {
    const handleStickyCategory = () => {
      let category = document.querySelector(".category-bar") as HTMLElement;

      if (category) {
        let offsetTop = category.offsetTop;
        triggerSticky(offsetTop);
      }
    };

    const triggerSticky = (point: number) => {
      let scroll = window.scrollY || window.pageYOffset;

      if (scroll > point) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleScrollCategoryBar = () => {
      handleStickyCategory();
      detectCategory();
    };
    window.addEventListener("scroll", handleScrollCategoryBar);

    return () => {
      window.removeEventListener("scroll", handleScrollCategoryBar);
    };
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (searchInput.current) searchInput.current.focus();
  }, [isOpenSearch]);

  return (
    <CategoryBarStyle className="category-bar">
      <div className={classes({ "is-sticky": isSticky }, "category-bar-wrap")}>
        <div className="container">
          <div className="wrapper">
            <div className={classes({ open: isOpenSearch }, "search-box")}>
              <div className="search-form">
                <span
                  className="icon-search"
                  onClick={() => {
                    showHideSearch(true);
                  }}
                >
                  <IoSearch />
                </span>
                {isOpenSearch && (
                  <input
                    type="text"
                    className="search-form-field"
                    placeholder="Search"
                    ref={searchInput}
                  />
                )}
                <span
                  className="close-search-icon icon-cross"
                  onClick={() => {
                    showHideSearch(false);
                  }}
                >
                  <CgClose />
                </span>
              </div>
            </div>
            <div className="category-nav">
              <div className="slider-wrapper">
                <Swiper
                  className="swiper"
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  allowTouchMove={false}
                  slidesPerView={"auto"}
                  preventClicksPropagation={false}
                  freeMode={true}
                >
                  {categories &&
                    categories.map((category) => (
                      <SwiperSlide
                        className={classes(
                          { selected: category.isSelected },
                          "cat-item"
                        )}
                        key={category.code}
                        data-cat-anchor-id={category.code}
                      >
                        <span
                          onClick={(e) => {
                            handleClickCategory(e);
                          }}
                        >
                          {category.name}
                        </span>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div className="slider-nav">
                  <div className="swiper-button-prev" slot="button-prev"></div>
                  <div className="swiper-button-next" slot="button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CategoryBarStyle>
  );
};

export default CategoryBar;
