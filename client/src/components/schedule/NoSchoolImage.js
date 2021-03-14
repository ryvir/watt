import React, {useState, useEffect} from 'react';

// Images
import noschool1 from '../../assets/electronhw.png';
import noschool2 from '../../assets/noschool2.png'; // Consider removing
import noschool3 from '../../assets/electroncoffee.png';
import noschool4 from '../../assets/electronvsepr.png';
import noschool5 from '../../assets/electronconfig.png';
import noschool6 from '../../assets/electronphasechange.png';


// Seeding function
// https://github.com/bryc/code/blob/master/jshash/PRNGs.md#mulberry32
// https://github.com/Orbiit/gunn-web-app/commit/479013823bb8453c51e23a936e8390f860f58840
export function mulberry32(a) {
    return () => {
        a |= 0
        a = (a + 0x6d2b79f5) | 0
        let t = Math.imul(a ^ (a >>> 15), 1 | a)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

// Get a random no-school image
const randomImage = (millis) => {
    const options = [noschool1, noschool2, noschool3, noschool4, noschool5, noschool6];
    const seed = mulberry32(millis);

    // Old non-seeded random function
    /*
    let choice = Math.floor(Math.random() * (options.length - 1));
    if (choice >= prev) choice++; // Ensure no duplicates
    console.log(choice)
    */

    const index =
        millis % (2 * 86400000) < 86400000
            ? // Left half (including middle)
            Math.floor(seed() * Math.ceil(options.length / 2))
            : // Right half (excluding middle)
            Math.floor(seed() * Math.floor(options.length / 2)) +
            Math.ceil(options.length / 2)

    return options[index];
}

const NoSchoolImage = (props) => {
    const {viewDate} = props;

    const [image, setImage] = useState(null);
    //const [index, setIndex] = useState(0);

    useEffect(() => {
        const img = randomImage(viewDate.valueOf());
        setImage(img);
        //setIndex(ind);
    }, [viewDate])

    return <img src={image} alt="No school image" height="400"/>
}

export default NoSchoolImage;