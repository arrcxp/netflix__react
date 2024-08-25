import { useState } from 'react';
import './Movies__Poster.css'

const Movies__Poster = () => {
    const movies__poster__1 = [
        { 
          title: 'Mission: Cross',
          url: 'https://occ-0-1588-64.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTJuIc6hQtEH93GJqB-NntvRrdGDVHc925NiV-8TJPTIs-jdNvI-zfx4xn82u8niGYU4rw8CpRbIGrKm-9ceTJIMJ7XtiGGx0WbBJaMjW0iktBIt6Auh7lFrQzQVcrJtj6EdmEvaIklQDeQ0UxWjPu9OqN2K414EBsvvNifTTtMDfRPI8BPN_F7aWlLsgmrCCBlEDh8R0UVoJ_djspPXu5_WqjBCsYWxrZ4qmQlm8ezikHMscVu_s_oAEp-1e39PL1lFkRB76I7QxKcTqhve6YZDY3VGnrSfKHT6ZqFC9b2aMCxqrz3XdJqUcB1-azomHYGarl-dyy9T8VBStpdNYaGsGF41Ru4u1mYWjgs3ikytRTQthiQ.webp'
        },
        { 
          title: 'The Union',
          url: 'https://occ-0-1588-64.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQY29gJIWJun3k213jBCxGIw8WNHYLL7UJaqIWmSwTYsoPh_4CKg1OTcv0QF25_70PiMrzZW47uz_d2Ici_OI5mwy-kKVRJ1yAhd9jwme5kYTqJMQUmvrGXf-HkLyXlVPLpc19FvW4igz9j2Po5UTZTVnQM8cx1_OPrsOfric65_wmNRHEGO1DnnBQvjmOWF75UfabJuwo4GIoLhA9ZYxuzw30ES2vly0v268eeBRqUi7JmuIx3pJQfDVuHFFZ0-rG6RAuLULrfxHWnKLJ9CfHuGtcBWA9QRTJ-SeJl5dQe5PLBtR9OGRPY3uHO-ZpRrmEUdV5xLrFbbsbtTY2xkzwHYhdX5nHuhBZ5VeLJYAwiWOlUv4-w.webp'
        },
        { 
          title: 'Kingsman: The Golden Circle',
          url: 'https://occ-0-1588-64.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdI0tlGbJJ2CJqzIRQqSzYA7UyPfsRzbGXzEfnIoGBgoR_LJ9RsbH6qAKQxj5AtafVoiol1rJpadFQU3zs_qAgDPq7_O21RZed7JmOoXdvmhElvm6380Z5ki8JNrJz4Y41N1ejOilIUdoxqzq_lAX1WHKZTQV2sR1deeF3NVjPV3pzf8PzfuDi87mZXRywAKLvK_vLEeDbUyljKWznlap3yTrQL2Cty9kSqfdYcGdRp-u0J-TsO7pkZ6Hr5zo7cQ5NyTN42gUWBIGJty66AEM2R9SHz4A8WzXqOky6iBuHIlsG3sgDYWpFgcTzOwILlRnzSG4bBDRidLvBMJDi_EsM4.webp'
        },
        { 
          title: 'Ghostbusters: Frozen Empire',
          url: 'https://occ-0-1588-64.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQ_6P0MueUbUPwFYSU6X1UIa6FL9Qr6DTF2iqvP0GFGDzDXgOtf83TkL6VDi4njYnXTzaU9jv9MVvp46tIk6bzuImq5YwZi3-cTEtAf0kjYoCAj0y8tyVACk99nfVMKLUewN6jYhD5oA--jnGAXajI7ue4LXKtFqzhN5jMiks8Phuf65BoQRpyRZTwSet4v6nIp3OrK2ReAitAynLK8k9xoJ2WU2rdK7wFFDGT5cVQBNiYPAQuwQoFH4P_YHwcZOAOOtPVBJcjsGSRPU7WZjf5rlUz4v.webp'
        }
      ];

    const movies__poster__2 = [
        { 
          title: 'Kingsman: The Secret Service',
          url: 'https://occ-0-1588-64.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABR3m5Vvg6gVJRZZaDcMZGLxuPCr0yrqQT_9GP-ATlhRj2IYGSJRYTADSw8ahqqTsRmD4vkuuloUGn5MruzZp6HBLlb8sv-9R48c.webp'
        },
        {
          title: 'Kung Fu Hustle', 
          url: 'https://occ-0-1588-64.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeY3R34rm1v0UeO5zD7g19T74XFU35ah7q6gMPbKAzNZDwB_olU_E2u7qe7xmmI_l3zye7zisieoyOxTlEJou9j5zW0Z9-hhWHg.webp'
        },
        { 
          title: 'Ticket to Paradise', 
          url: 'https://occ-0-1588-64.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABU9jbO7ZRMK6isTvnstHQhQ1CR5hG6aWUrDcX-uI1eaP3j2EzlQXGXnUssjB4vv06dtsoRPDXOoRCmiaN_UL5Sxhi2SYm_GwEheuepRNwMtcsXTjmXA6oZgqlb9XHWZWZFF1hPamkp_ULrG6eHfa6_AHGaScpxu2fC_YIOelK0bQdEGkyE6v13Af2OkvJOyFU82S4Wt835_77qJ3jseEMMMUXdscwg-AXsOu0eS_b2VNWazWwgDvxtgO-nku8BzQoahoT47bAIRgvPLGNf8oqlr9Lp8nCrwz-aGBWoBfPE6Flgl4OLkK6QwEd0gUdv5QIeGHXEeeZAFqzwe4xrLKuFM.webp'
        },
        { 
          title: 'Maharaja', 
          url: 'https://occ-0-1588-64.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVnVseCf50-R1462JDaQKvq54J2uOHs-Y936s_nzZTaDMHFsu1gkCuoTmpuVY7sNvUqLdVo709K1CHK9xd4SjwZdZBgodUJ1P5EV1Pze2GjtqjGYvZm2-1e4WXaAXePoSZ4oLPNiXnUx2hx2Wcs9hZ8_9mriWzOQyEE.webp'
        },
      ];

    const posterStyle = {
        width: '100%',
        height: '550px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '16px',
        display: 'inline-block',
        margin: '10px',
    };

    const [activePosterIndex, serActivePosterIndex] = useState(0);
    const posters = [movies__poster__1, movies__poster__2];

    const goPrev = () => {
        serActivePosterIndex((prevIndex) => (prevIndex > 0 ? 0 : posters.length - 1));
    }

    const goNext = () => {
        serActivePosterIndex((prevIndex) => (prevIndex < posters.length - 1 ? prevIndex + 1 : 0))
    }

    return (
        <div className='container'>
            <div className="poster__container">
                <div onClick={goPrev} className='arrow'>‹</div>
                <div className={`poster-1__container`}>
                    {posters[activePosterIndex].map((item, index) => (
                        <span className='bg__poster' key={index} 
                              style={{ ...posterStyle, 
                              backgroundImage: `url(${item.url})` }} 
                              title={item.title}>
                        </span>
                    ))}
                </div>
                <div onClick={goNext} className='arrow'>›</div>
            </div>
        </div>
    );
}

export default Movies__Poster;
