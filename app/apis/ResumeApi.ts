import axiosClient from '../../utils/axiosClient/';

type uploadResumeValue = {
    fullName: string;
    email: string;
    studentId: string;
}

const END_POINT = {
    CV: '/Cv/'
}
export const uploadResume = (value: uploadResumeValue, file: File) => {
    const dataForm = new FormData();
    dataForm.append('FullName', value.fullName);
    dataForm.append('Email', value.email);
    dataForm.append('StudentId', value.studentId);
    dataForm.append('CvFile', file);
    console.log(dataForm.values)



    return axiosClient.post(`${END_POINT.CV}upload`,dataForm, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    });
}