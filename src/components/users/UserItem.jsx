import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {
    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className='avatar'>
                        <div className="rounded-full shadow w-16 h-16 border border-base">
                            <img src={avatar_url} alt="Avatar URL" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{login}</h2>
                    <Link className='text-base-content text-opacity-40 hover:text-opacity-80 duration-200' 
                    to={`/users/${login}`}>
                        Visit Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem