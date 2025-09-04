import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/counterSlice'
import Navigation from '../components/Navigation'

const StateManagementPage: React.FC = () => {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>State Management with Redux Toolkit</h1>
      <Navigation />
      
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>Counter Example</h2>
        <p>This example demonstrates how to manage global state using Redux Toolkit.</p>
        
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
          <h3>Current Count: {count}</h3>
          
          <div style={{ margin: '20px 0' }}>
            <button 
              onClick={() => dispatch(increment())}
              style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Increment
            </button>
            
            <button 
              onClick={() => dispatch(decrement())}
              style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Decrement
            </button>
            
            <button 
              onClick={() => dispatch(incrementByAmount(5))}
              style={{ margin: '0 10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Add 5
            </button>
          </div>
          
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h4>Key Concepts:</h4>
            <ul>
              <li><strong>Store</strong>: Holds the complete state tree of your app</li>
              <li><strong>Reducers</strong>: Specify how the state changes in response to actions</li>
              <li><strong>Actions</strong>: Plain objects that describe what happened in the app</li>
              <li><strong>useSelector</strong>: Hook to read data from the Redux store</li>
              <li><strong>useDispatch</strong>: Hook to dispatch actions to the Redux store</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateManagementPage