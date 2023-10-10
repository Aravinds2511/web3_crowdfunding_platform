import React, { useEffect } from "react";

const PopUp = ({ setOpenModal, donate, donateFunction, getDonations}) => {
    const [amount, setAmount] = useState("");
    const [allDonationData, setallDonationData] = useState();

    const createDonation = async () => {
        try {
            const data = await donateFunction(donate.pId, amount);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

}