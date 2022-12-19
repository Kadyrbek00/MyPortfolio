import React, { useState } from 'react';
import "../Styles/Work/work.css"
import Modal from 'react-modal'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const datas = [
  {
    id: 1,
    title: "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Error, veniam ipsam voluptas quibusdam placeat ipsum inventore deleniti dolorem laudantium blanditiis provident magni! Molestias officiis cum laborum eum repudiandae ea rem.",
    srcImg: "https://www.amcham.kg/wp-content/uploads/logo-vision-group.svg",
    name: "Vg Stroy",
    link: "http://vg-stroy.com"
  },
  {
    id: 3,
    title: "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Error, veniam ipsam voluptas quibusdam placeat ipsum inventore deleniti dolorem laudantium blanditiis provident magni! Molestias officiis cum laborum eum repudiandae ea rem.",
    srcImg: "https://im.mashina.kg/tachka/dealers/f242f61ddc45935789d14ececbe979f9_logo.jpg",
    name: "Auto Mall",
    link: "https://automall.kg"
  },
  {
    id: 2,
    title: "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Error, veniam ipsam voluptas quibusdam placeat ipsum inventore deleniti dolorem laudantium blanditiis provident magni! Molestias officiis cum laborum eum repudiandae ea rem.",
    srcImg: "https://cdn.house.kg/house/builders/d660f82c1c021d63f0b198af06e879a5.jpg",
    name: "Amanat City",
    link: "http://amanatcity.kg"
  },
]

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};


export default function Works() {
  const [active, setActive] = useState(false)
  const [data, setData] = useState({ img: '', title: '', link: '', name: '' })


  return (
    <div className='Work_container' id='Works'>

      {datas.map((items) => {

        return (
          <div className='content' key={items.id}>

            <img src={items.srcImg} alt={items.name} width='200px' height='200px' />

            <div className='text' onClick={() => { setActive(true); setData({ img: items.srcImg, title: items.title, link: items.link, name: items.name }) }}>
              {items.name}
            </div>

            <Modal isOpen={active}
              onRequestClose={() => setActive(false)}
              className='Modal'
              bodyOpenClassName={"ReactModal__Body--open"}
              overlayClassName={'work_wrapper images wrapper_text Overlay'}

            >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setActive(false)}>
                {data.name}
              </BootstrapDialogTitle>
              <div className='work_wrapper'>
                <img className='images' src={data.img} alt={items.name} />
                <p className='wrapper_text'>{data.title}<br /><a href={data.link}>{data.link}</a></p>
              </div>
            </Modal>
          </div>
        )
      })}

    </div>
  )
}