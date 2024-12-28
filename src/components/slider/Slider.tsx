import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Slider.module.scss";
import SwiperCore from "swiper";
import { useForm, SubmitHandler } from "react-hook-form";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";
import { Slide4 } from "./Slide4";
export interface ISliderFormData {
  checkboxes?: boolean[]; // Массив значений для чекбоксов
  sizes?: string[];
  comment?: string | null;
}
export const Slider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const { register, handleSubmit, setValue, watch } = useForm<ISliderFormData>({
    defaultValues: {
      checkboxes: Array(6).fill(false),
      sizes: [],
      comment: null,
    },
  });
  const onSubmit: SubmitHandler<ISliderFormData> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div id="slider" className="slider">
      <div className="container">
        <Swiper ref={swiperRef} spaceBetween={30} slidesPerView={1} loop>
          <SwiperSlide>
            <Slide1 goToNextSlide={goToNextSlide} setValue={setValue} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 goToNextSlide={goToNextSlide} setValue={setValue} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide3 goToNextSlide={goToNextSlide} register={register} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide4 onSubmit={handleSubmit(onSubmit)} register={register} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
