import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import FormTextInput from '@components/FormTextInput';
import {screenHeight, screenWidth} from '@utils/Scaling';

const RoutecheckGrading: FC<{setPage: (value: string) => void}> = ({
  setPage,
}) => {
  const initialState = {
    natureofduty: '', // radio button
    regno: '', //textInput
    typeofcheck: '', //textInput
    typeofapproach: '', //textInput
    others: '', //textInput
    from: '', //textInput
    to: '', //textInput
    takeOffTime: '', //textInput
    landingTime: '', //textInput
    duration: '00:00', //textInput
    dayOrNight: '', //textInput
    todayornight: '', //textInput
    ScheduledDate: '', //textInput
    testOn: 'AEROPLANE', //textInput
    seatOccupied: '', //textInput
    aeroplane: '', //textInput
    // cadetId: parseInt(studentId),
    id: '0',
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({
    natureofduty: false,
    regno: false,
    typeofcheck: false,
    typeofapproach: false,
    others: false,
    from: false,
    to: false,
    takeOffTime: false,
    landingTime: false,
    duration: false,
    dayOrNight: false,
    todayornight: false,
    ScheduledDate: false,
    testOn: false,
    seatOccupied: false,
    aeroplane: false,
  });

  const handleChange = (text: string, name?: string) => {
    if (name) {
      setFormData(prev => ({...prev, [name]: text}));

      if (errors[name as keyof typeof errors]) {
        setErrors(prev => ({...prev, [name]: false}));
      }
    }
  };
  return (
    <View>
      <FormTextInput
            value={formData.regno!}
            handleChange={handleChange}
            placeHolder="REGISTRATION NO"
            name="regno"
            editable={true}
            maxLength={12}
            // customStyles={[
            //   styles.formItem,
            //   errorData.regno ? { borderColor: "red", borderWidth: 1 } : null,
            // ]}
            prefix="VT-"
            compress={true}
          />
    </View>
  );
};

export default RoutecheckGrading;
