import React from "react";
import { Dimensions, PixelRatio } from "react-native";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;
export const fontSize = (x) => x * (width / 320)
