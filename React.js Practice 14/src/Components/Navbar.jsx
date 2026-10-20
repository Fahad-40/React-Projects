import React from 'react'
import { memo } from 'react'

const Navbar = ({ getAdjective }) => {
    return (
        <div>
            <button>
                I am {getAdjective()} navbar
            </button>
        </div>
    )
}

export default memo(Navbar)
