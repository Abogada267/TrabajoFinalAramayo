import React from 'react';
import Select from 'react-select';

const CategoryList = () => {
  const categories = [
    { value: 'FAMILIA', label: 'FAMILIA' },
    { value: 'LABORAL', label: 'LABORAL' },
    { value: 'PENAL', label: 'PENAL' },
    {
      value: 'demandas',
      label: 'Demandas',
      options: [
        { value: 'FAMILIA', label: 'FAMILIA' },
        { value: 'LABORAL', label: 'LABORAL' },
        { value: 'PENAL', label: 'PENAL' },
      ],
    },
  ];

  return (
    <div className="category-list" style={{ backgroundColor: 'yellow', paddingTop: '1rem', width: '100%', position: 'fixed', top: 0, left: 0 }}>
      <div className="header__logo" style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '1rem' }}>
        <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/294533423_495591699151773_4023451155261982475_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jRp1JNhNXosAX_k1qog&_nc_ht=scontent.faep14-2.fna&oh=00_AfCVRXRIDyQ7RAFM3cYpRTS8leQr64eBT6UvdfDpkyElzg&oe=649D88AE" alt="Logo" style={{ width: '90px', height: 'auto', marginTop: '0.5rem' }} />
      </div>
      <div className="category-list__content" style={{ display: 'flex', justifyContent: 'center', marginLeft: '1rem' }}>
        {categories.map((category, index) => (
          <div key={index} style={{ margin: '0 1rem' }}>
            {category.options ? (
              <Select options={category.options} />
            ) : (
              <a
                href={`/categoria/${category.value}`}
                className="category-link"
                style={{
                  color: 'blue',
                  fontFamily: 'Arial',
                  paddingRight: '1cm',
                  display: 'inline-block',
                  marginTop: '2rem',
                }}
              >
                {category.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
