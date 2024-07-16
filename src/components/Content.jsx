import React, { useState, useRef } from 'react'
import classes from './Content.module.css'
import account from '../assets/account.png'
import backups from '../assets/backups.png'
import notifications from '../assets/notifications.png'
import sales from '../assets/sales.png'
import pricing from '../assets/pricing.png'
import security from '../assets/security.png'
import userroles from '../assets/userroles.png'
import exit from '../assets/exit.png'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const Content = () => {
    const [openModal, setOpenModal] = useState(false);
    const emailInputRef = useRef(null);

    return (
        <section className="bg-gray-100 p-5 pl-8 pt-5 pb-0 grid grid-cols-12 h-[840px]">
            <div className="col-start-1 col-end-3 bg-white rounded-lg p-4 h-[87vh]">
                <div className="pb-2">
                    <p className='font-satoshi font-bold text-left'>
                        Settings
                    </p>
                </div>
                <div className="flex flex-col justify-center gap-2">

                    <div className="flex gap-2 p-3 items-center">
                        <img src={account} alt='' className='max-w-[22px]' />
                        <h1 className='font-satoshi font-normal text-left'>Account</h1>
                    </div>

                    <div className="flex gap-2 p-3 items-center">
                        <img src={security} alt='' className='max-w-[22px]' />
                        <h1 className='font-satoshi font-normal text-left'>Security</h1>
                    </div>
                    <div className="flex gap-2 p-3 items-center">
                        <img src={notifications} alt='' className='max-w-[22px]' />
                        <h1 className='font-satoshi font-normal text-left'>Notifications</h1>
                    </div>
                    <div className="flex gap-2 p-3 items-center">
                        <img src={pricing} alt='' className='max-w-[22px]' />
                        <h1 className='font-satoshi font-normal text-left'>Pricing</h1>
                    </div>
                    <div className="flex gap-2 p-3 items-center">
                        <img src={sales} alt='' className='max-w-[22px]' />
                        <h1 className='font-satoshi font-normal text-left'>Sales</h1>
                    </div>
                    <div className="flex gap-2 p-3 items-center bg-blue-50 rounded-lg">
                        <img src={userroles} alt='' className='max-w-[22px]' />
                        <h1 className='font-satoshi font-normal text-left'>User &amp; Roles</h1>
                    </div>

                    <div className="flex gap-2 p-3 items-center">
                        <img src={backups} alt='' className='max-w-[22px]' />
                        <h1 className='font-satoshi font-normal text-left'>Backups</h1>
                    </div>
                    <div className="pt-3">

                        <hr />
                    </div>
                    <div className="absolute bottom-[30px]">
                        <button className='border border-gray-600 p-3.5 rounded-md'>
                            <span className="flex gap-3">
                                <img src={exit} alt='' className='max-w-6' />
                                <h2 className='font-satoshi text-sm font-medium'>Back to Dashboard</h2>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.contentRight}>

                <div className={classes.headerTitle}>
                    <h1>
                        Settings / Users & Roles Settings
                    </h1>
                </div>
                <div className={classes.headerHead}>
                    <h2>
                        Users & Roles
                    </h2>
                    <h3>
                        Manage all users in your business
                    </h3>
                </div>
                <div>
                    <div class="font-satoshi text-sm font-medium text-center text-gray-500  border-gray-200 ">
                        <ul class="flex flex-wrap -mb-px">
                            <li class="me-2">
                                <a href="/" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Users</a>
                            </li>
                            <li class="me-2">
                                <a href="/" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Roles</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.tableHeading}>
                    <div className={classes.tableHeadingLeft}>

                        <form>
                            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-#fff dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="search" class="block w-72 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" />
                            </div>
                        </form>
                        <button>
                            <span className={classes.filterBtn}>
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.333374 1.00002C0.333374 0.539783 0.70647 0.166687 1.16671 0.166687H12.8334C13.2936 0.166687 13.6667 0.539783 13.6667 1.00002C13.6667 1.46026 13.2936 1.83335 12.8334 1.83335H1.16671C0.70647 1.83335 0.333374 1.46026 0.333374 1.00002Z" fill="#334155" />
                                    <path d="M2.00004 6.00002C2.00004 5.53978 2.37314 5.16669 2.83337 5.16669H11.1667C11.6269 5.16669 12 5.53978 12 6.00002C12 6.46026 11.6269 6.83335 11.1667 6.83335H2.83337C2.37314 6.83335 2.00004 6.46026 2.00004 6.00002Z" fill="#334155" />
                                    <path d="M4.50004 10.1667C4.0398 10.1667 3.66671 10.5398 3.66671 11C3.66671 11.4603 4.0398 11.8334 4.50004 11.8334H9.50004C9.96028 11.8334 10.3334 11.4603 10.3334 11C10.3334 10.5398 9.96028 10.1667 9.50004 10.1667H4.50004Z" fill="#334155" />
                                </svg>
                                <h1> Filter</h1>
                            </span>
                        </button>

                    </div>
                    <div className={classes.tableHeadingRight}>
                        <div>
                            <button >
                                <span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 15.9375H9.00007C10.8394 15.9354 12.6027 15.2038 13.9033 13.9033C15.2038 12.6027 15.9354 10.8394 15.9375 9.00007V9C15.9375 7.62789 15.5306 6.2866 14.7683 5.14573C14.006 4.00487 12.9225 3.11567 11.6549 2.59059C10.3872 2.0655 8.99231 1.92812 7.64656 2.1958C6.30082 2.46349 5.06468 3.12422 4.09445 4.09445C3.12422 5.06467 2.46349 6.30082 2.19581 7.64656C1.92812 8.9923 2.06551 10.3872 2.59059 11.6549C3.11567 12.9225 4.00487 14.006 5.14573 14.7683C6.2866 15.5306 7.6279 15.9375 9 15.9375ZM9.625 9.5625H9.5625V9.625V12.125C9.5625 12.2742 9.50324 12.4173 9.39775 12.5227C9.29226 12.6282 9.14919 12.6875 9 12.6875C8.85082 12.6875 8.70775 12.6282 8.60226 12.5227C8.49677 12.4173 8.4375 12.2742 8.4375 12.125V9.625V9.5625H8.375H5.875C5.72582 9.5625 5.58275 9.50324 5.47726 9.39775C5.37177 9.29226 5.3125 9.14918 5.3125 9C5.3125 8.85082 5.37177 8.70774 5.47726 8.60225C5.58275 8.49676 5.72582 8.4375 5.875 8.4375H8.375H8.4375V8.375V5.875C8.4375 5.72582 8.49677 5.58274 8.60226 5.47725C8.70775 5.37176 8.85082 5.3125 9 5.3125C9.14919 5.3125 9.29226 5.37176 9.39775 5.47725C9.50324 5.58274 9.5625 5.72582 9.5625 5.875V8.375V8.4375H9.625H12.125C12.2742 8.4375 12.4173 8.49676 12.5228 8.60225C12.6282 8.70774 12.6875 8.85082 12.6875 9C12.6875 9.14918 12.6282 9.29226 12.5228 9.39775C12.4173 9.50324 12.2742 9.5625 12.125 9.5625H9.625ZM4.52072 2.29628C5.84658 1.41036 7.40537 0.937507 8.99997 0.9375C11.1376 0.939766 13.187 1.78994 14.6985 3.30146C16.2101 4.813 17.0602 6.86243 17.0625 9.00007C17.0625 10.5947 16.5896 12.1534 15.7037 13.4793C14.8178 14.8052 13.5586 15.8385 12.0854 16.4488C10.6122 17.059 8.99106 17.2187 7.42709 16.9076C5.86312 16.5965 4.42652 15.8286 3.29896 14.701C2.17139 13.5735 1.40352 12.1369 1.09242 10.5729C0.781329 9.00894 0.940993 7.38784 1.55122 5.91461C2.16146 4.44139 3.19485 3.1822 4.52072 2.29628Z" fill="white" stroke="white" stroke-width="0.125" />
                                    </svg>
                                    <h2>
                                        New User
                                    </h2>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
                <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                    <Modal.Header />
                    <Modal.Body>
                        <h1>new</h1>
                    </Modal.Body>
                </Modal>

            </div>
        </section>
    )
}

export default Content
