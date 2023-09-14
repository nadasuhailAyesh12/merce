import React,{useEffect} from'react'
import Swal from "sweetalert2"
  
const DeleteAlert = ({ isVisible, onClose, onConfirm }) => {
    useEffect(() => {
        if (isVisible) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    onConfirm()
                }
                onClose()
            });
        };
    },[onClose,onConfirm,isVisible])
}

export default DeleteAlert
