import React from 'react';
import { Typography } from 'material-ui';


const ParagraphText = ({ text }) => {
    return text.split(/\r\n|\n|\r/g).map((paragraph, index) => (<Typography key={index}>{paragraph}</Typography>))
}

export default ParagraphText
