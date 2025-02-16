import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";
import styles from './SearchBar.module.css';

const MultiRangeSlider = ({ min, max, name, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ type: name, min: minVal, max: maxVal });
}, [minVal, maxVal, name, onChange]);

  const handleInputChange = (type, value) => {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) return; 

    if (type === "min") {
      setMinVal(Math.max(min, Math.min(parsedValue, maxVal - 1)));
    } else {
      setMaxVal(Math.min(max, Math.max(parsedValue, minVal + 1)));
    }
  };

  return (
    <div className={styles['inputSurch']}>
      <div className={styles['glow']}></div>
      <div className={styles['darkBorderBg']}></div>
      <div className={styles['darkBorderBg']}></div>
      <div className={styles['darkBorderBg']}></div>

      <div className={styles['white']}></div>
      <div className={styles['border']}></div>

      <div className={styles['inputBox']}>

      <div className={styles['input']} >
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />

          <div className="slider__left-value">
            <input
              type="number"
              value={minVal}
              min={min}
              max={max - 1}
              className="inputNumberSlider"
              style={{ width: "50px", height: "25px", marginLeft: "-10px"}}
              onChange={(e) => handleInputChange("min", e.target.value)}
              onBlur={() => setMinVal((prev) => Math.max(min, Math.min(prev, maxVal - 1)))}
            />
          </div>

          <div className="slider__right-value">
            <input
              type="number"
              value={maxVal}
              min={min + 1}
              max={max}
              className="inputNumberSlider"
              style={{ width: "50px", height: "25px", marginLeft: "-10px" }}
              onChange={(e) => handleInputChange("max", e.target.value)}
              onBlur={() => setMaxVal((prev) => Math.min(max, Math.max(prev, minVal + 1)))}
            />
          </div>
        </div>
        </div>
        <div className='input-mask'></div>
        <div className='pink-mask'></div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
