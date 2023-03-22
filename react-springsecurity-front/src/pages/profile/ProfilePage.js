import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PurchaseService from '../../services/PurchaseService';

function ProfilePage() {
  
  const currentUser = useSelector(state => state.user);

  const [purchaseList, setPurchaseList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    PurchaseService.getAllPurchaseItems().then((response) => {
      setPurchaseList(response.data);
    });
  }, []);

  return (
    <div className='container'>
      <div className='pt-5'>
        
        {errorMessage &&
        <div className='alert alert-danger'>
          {errorMessage}
        </div>
        }

        <div className='card'>
          <div className='card-header'>

            <div className='row'>
              <div className='col-6'>
                <h3>All Purchased Items</h3>
              </div>
            </div>

            <div className='card-body'>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Date</th>
                  </tr>
                </thead>
                <tbody>

                {purchaseList.map((item,ind) => 
                  <tr key={ind}>
                    <th scope='row'>{ind + 1}</th>
                    <td>{item.name}</td>
                    <td>{`$ ${item.price}`}</td>
                    <td>{new Date(item.purchaseTime).toLocaleDateString()}</td>
                </tr>

                )}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default ProfilePage