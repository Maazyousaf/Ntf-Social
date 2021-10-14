import {Tabs} from '../../Assests/Data'
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function Example() {
  
    return (
      <div>
        <div className="lg:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            
          >
            {Tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden lg:block">
          <nav className="flex space-x-2" aria-label="Tabs">
            {Tabs.map((tab,i) => (
              <a
                key={tab.name}
                
                className={classNames(
                  tab.current==true ? 'text-gray-800 bg-white' : 'text-white bg_card hover:text-gray-400',
                  'px-6 py-2 font-medium text-xs truncate rounded-md'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    )
  }