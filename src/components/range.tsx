"use client";
import React from "react";

type RangeProps = {
  min: number;
  max: number;
  value: number;
  label?: string;
  endLabels?: [string, string];
  onChange?: (e: any) => void;
  unit?: string;
};

export default function Range({
  min,
  max,
  value,
  label,
  endLabels,
  onChange,
  unit,
}: RangeProps) {
  return (
    <div className="flex flex-col w-fit mb-2">
      {label && (
        <span className="text-small mr-1 text-foreground">{label}</span>
      )}

      <div className="flex items-end">
        {endLabels && (
          <span className="text-small mr-2 leading-3">{endLabels[0]}</span>
        )}
        <div className="relative w-60 flex flex-col">
          <div className="flex">
            <div style={{ width: `${(value / (max - min)) * 100}%` }} />
            <span className="text-small mr-2 leading-3 mb-2">
              {value}
              {unit ? unit : ""}
            </span>
          </div>

          <div className="w-full h-2 bg-secondary rounded-full">
            <div
              style={{ width: `${(value / (max - min)) * 100}%` }}
              className="bg-primary h-full rounded-full"
            />
          </div>

          <input
            type="range"
            min={min}
            max={max}
            step={1}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            className="absolute bottom-0 left-0 w-full opacity-0"
            readOnly={onChange === undefined}
          />
        </div>

        {endLabels && (
          <span className="text-small ml-2 leading-3">{endLabels[1]}</span>
        )}
      </div>
    </div>
  );
}
