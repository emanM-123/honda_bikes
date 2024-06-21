const bannerImages = [
    "/images/cb350rs-campaign-banner_new9_LE_auto_x2.jpg",
    "/images/cb350_web_banner_new6_LE_auto_x2.jpg",
    // "/images/CB350RS_desk_banner_dev3_LE_auto_custom.jpg",
    "/images/cb350_desk_homebanner_dev7.jpg"
];


const bikeImages = [
    {
        id: 1,
        image: "/bikes/cb300f.png",
        title: "Honda CD",
    },
    {
        id: 2,
        image: "/bikes/blue_bike.webp",
        title: "Honda Dio"
    },
    {
        id: 3,
        image: "/bikes/green.png",
        title: "Honda Sp"
    },
    {
        id: 4,
        image: "/bikes/grand_white.png",
        title: "Honda CB200X"
    },
    {
        id: 5,
        image: "/bikes/grand_red.png",
        title: "Honda Goldwing"
    },
    {
        id: 6,
        image: "/bikes/gray.png",
        title: "Honda CB350RS"
    }
];

const gallaryImage = [
    {
        image: "/gallary/div.elementor-widget-wrap-1.png",
    },
    {
        image: "/gallary/div.elementor-widget-wrap-2.png",
    },
    {
        image: "/gallary/div.elementor-widget-wrap-3.png",
    },
    {
        image: "/gallary/div.elementor-widget-wrap.png"
    },
    {
        image: "/gallary/div.elementor-widget-wrap.png"
    }, {
        image: "/gallary/div.elementor-widget-wrap.png"
    }

];

const bikeData = [
    {
        id: 1,
        model: "CB300F",
        specifications: [
            {
                engine: {
                    "type": "286cc single-cylinder",
                    "torque": "20 lb-ft",
                    "power": "30 hp",
                    "type1": "286cc single-cylinder",
                    "power1": "30 hp",
                    "torque1": "20 lb-ft",
                    "torque2": "20 lb-ft"
                },
            }, {
                dimensions: {
                    "length": "2166mm",
                    "width": "4562mm",
                    "heigth": "988mm",
                    "length1": "2166mm",
                    "width1": "4562mm",
                    "heigth1": "988mm"
                },
            },
            {
                suspension: {
                    "Frame Type": "Half Duplex Cardle",
                    "Front Suspension": "Telescopic",
                    "Rare Suspension": "Twin - Hydraulic"
                }
            }

        ],
        price: "$12.327",
        variants: [
            {
                name: "",
                colors: [
                    {
                        color: "GRAND PRIX RED",
                        link: "/bikes/grand_red.png"
                    },
                    {
                        color: "GRAND PRIX Gray",
                        link: "/bikes/grand_gray.png"
                    },
                    {
                        color: "GRAND PRIX White",
                        link: "/bikes/grand_white.png"
                    },
                ],

            },
            {
                name: "",
                colors: [
                    {
                        color: "Athletic Blue Metallic",
                        link: "/bikes/cb300f.png"
                    },
                    {
                        color: "Precious gray Metallic",
                        link: "/bikes/gray.png"
                    },
                ],
            },
            {
                name: "",
                colors: [
                    {
                        color: "Athletic Green Metallic",
                        link: "/bikes/green.png"
                    },
                    {
                        color: "Precious Red Metallic",
                        link: "/bikes/red_bike.webp"
                    },
                    {
                        color: "Pearl Nightstar blue",
                        link: "/bikes/blue_bike.webp"
                    },
                ],
            },
            {
                name: "",
                colors: [
                    {
                        color: "Pearl Igneous Black",
                        link: "/bikes/black.png"
                    },
                ],
            },
        ]
    },
];

const features = [
    {
        image: "/images/feature1.jpg",
        description: "FULL LED HEADLAMP AND TAILLAMP WITH FIRE RING TYPE LED WINKERS Find royalty in style. Take on the roads with elegance and class with these round-shaped full leadheadlamps and fire ring-type LED winkers"
    },
    {
        image: "/gallary/div.elementor-widget-wrap-1.png",
        description: "TAILLAMP WITH FIRE RING TYPE LED WINKERS Find royalty in style. Take on the roads with elegance and class with these round-shaped full leadheadlamps and fire ring-type LED winkers"
    },
    {
        image: "/gallary/div.elementor-widget-wrap.png",
        description: "WINKERS Find royalty in style. Take on the roads with elegance and class with these round-shaped full leadheadlamps and fire ring-type LED winkers"
    }
]


const bikeSDetails = [
    {
        id: 1,
        modelName: "CB300F",
        image: "/bikeImages/CB300F_RED.png",
        gallery: [
            "/Content/Gallery/CB300F/Gallery1.jpg",
            "/Content/Gallery/CB300F/Gallery2.jpg",
            "/Content/Gallery/CB300F/Gallery3.jpg",
        ],
        about_specifications: "+The technical speciﬁcations and design of the vehicle may vary according to the requirements and conditions without any notice • CB300F meets Bharat Stage VI norms • Product shown in the picture may vary from actual product available in the market • All features and colours may not be part of all variants • **Conditions apply • Creative visualisation • Riding shots are shot in a controlled environment under expert supervision. *Available in DLX PRO variant only.",
        specifications: [
            {
                engine: {
                    "type": "4 stroke, SI, Oil cooled Engine",
                    "Displacement": "293.52cc",
                    "Max engine output": "18kW @ 7500rpm",
                    "Max torque": "25.6 N-m @ 5500 rpm",
                    "Fuel system": "PGM-FI",
                    "Bore x stroke": "77.000 X 63.033",
                    "Compression ratio": "9.3:1",
                    "Starting method": "Self start",
                },
            }, {
                dimensions: {
                    "Length": "2084mm",
                    "Width": "765mm",
                    "Height": "1075mm",
                    "Wheel base": "1390mm",
                    "Ground clearance": "177mm",
                    "Kerb weight": "153kg",
                    "Seat length": "614mm",
                    "Seat height": "789mm",
                    "Fuel tank capacity": "14.1 L"
                },
            },
            {
                transmission: {
                    " Clutch type": "Multiplate wet clutch",
                    "No. of Gears": 6
                }
            },
            {
                tyresBreaks: {
                    "Tyre size & type (front)": "110/70R-17M/C 54H",
                    "Tyre size & type (rear)": "150/60R-17M/C 66H",
                    "Brake type & size (front)": "Disc- 276mm",
                    "Brake type & size (rear)": "Disc- 220mm",
                    "Braking System": "Dual Channel ABS",
                }
            },
            {
                suspension: {
                    "Frame Type": "Diamond Type",
                    "Front Suspension": "Telescopic (USD)",
                    "Rear Suspension": "Monoshock"
                }
            },
            {
                electricals: {
                    "Battery": "12 V, 5.0 Ah",
                    "Head Lamp/Tail Lamp/Winkers": "LED"
                }
            }
        ],
        variants: [
            {
                name: "",
                price: "Rs.170001",
                colors: [
                    {
                        color: "SPORTS RED",
                        link: "/bikeImages/CB300F_RED.png"
                    },
                    {
                        color: "MAT MARVEL BLUE METALLIC",
                        link: "/bikeImages/CB300F_BLUE.png"
                    },
                    {
                        color: "MAT AXIS GREY METALLIC",
                        link: "/bikeImages/CB300F_GRAY.png"
                    },
                ],

            },
        ],
        features: [
            {
                image: "/Content/features/CB300F/4Valve_300cc_Engine.jpg",
                title: "4 VALVE, 300cc ENGINE",
                description: "This 4 valve, 300cc engine from Honda is a powerful addition to any bike. With its four valves, it offers improved fuel efficiency and a smoother ride. Upgrade your bike's performance with this reliable engine. (Vroom vroom, indeed!)."
            },
            {
                image: "/Content/features/CB300F/Dual_Channel_Abs_new.jpg",
                title: "DUAL CHANNEL ABS",
                description: "Always stay in control of your direction and stability on all road conditions with Dual Channel ABS."
            },
            {
                image: "/Content/features/CB300F/Fully_digital_meter.jpg",
                title: "FULLY DIGITAL METER",
                description: "Get all the ride stats and feature indications in a quick glance on advanced digital meter with 5 level brightness adjustment."
            },
            {
                image: "/Content/features/CB300F/Oil_Cooled.jpg",
                title: "OIL COOLED",
                description: "Turn up the heat as you race through the urban streets - Oil cooler system will keep the engine temperature under control, so that you don’t compromise on performance."
            },
            {
                image: "/Content/features/CB300F/HSTC.jpg",
                title: "Honda SELECTABLE TORQUE CONTROL (HSTC)",
                description: "Stay connect to the road & own the control under any road condition, HSTC system maintains traction between tyre & surface, avoid slipping."
            },
            {
                image: "/Content/features/CB300F/Smartphone_voice_control.jpg",
                title: "Honda SMARTPHONE VOICE CONTROL SYSTEM (HSVCS)*",
                description: "Focus on your ride & Stay connected, HSVCS is a unique system that connects your phone with bike through Bluetooth and you can receive calls, messages, play music, use navigation & check weather. It can be operated by handle mounted switch unit supported by voice prompts."
            },
            {
                image: "/Content/features/CB300F/6_Speed_Transmission.jpg",
                title: "6 SPEED TRANSMISSION",
                description: "Turn up the heat as you race through the urban streets - Oil cooler system will keep the engine temperature under control, so that you don’t compromise on performance."
            },
            {
                image: "/Content/features/CB300F/Assist_And_Slipper_Clutch.jpg",
                title: "ASSIST SLIPPER CLUTCH",
                description: "Glide through street corners and city traffic with ease, as the assist slipper clutch requires less force enabling quick shift and prevents rear wheel hopping while down shifting."
            },
            {
                image: "/Content/features/CB300F/Led_All_Around.jpg",
                title: "LED ALL AROUND",
                description: "The Advanced Street fighter image inspired by the global trend is re-enforced by all around LED lights. Besides, they also give better road visibility and have longer life."
            },
            {
                image: "/Content/features/CB300F/Mono_Shock_Rear_Suspension.jpg",
                title: "MONO SHOCK REAR SUSPENSION",
                description: "The 5-step adjustable rear mono shock suspension maintains the center of gravity, for enhanced stability and better maneuverability."
            },
            {
                image: "/Content/features/CB300F/Wide_Radial_Rear_Tyre_new.jpg",
                title: "WIDE RADIAL REAR TYRE",
                description: "The 150mm wide rear tyre is built for superior grip, so you can take up any challenge with confidence and ease, be it street corner or the open road."
            },
            {
                image: "/Content/features/CB300F/topview.jpg",
                title: "TAPERED HANDLEBAR",
                description: "The handle pipe diameter at the clamped area in the center is more than the straight areas at both ends of the handle grip. This design gives you a clear feedback of the road surface through the front suspension."
            },
            {
                image: "/Content/features/CB300F/Golden_Usd_Front_Fork.jpg",
                title: "GOLDEN USD FRONT FORK",
                description: "The Golden Upside-Down (USD) front suspension offers superior cushioning and more strength for better handling and ultimate riding comfort."
            },
            {
                image: "/Content/features/CB300F/Hazard_Indicator.jpg",
                title: "HAZARD INDICATOR",
                description: "Be prepared for any road hazard with the Hazard_Indicator for your Honda bike. This quirky attachment will keep you alert and safe with its unique indicator system. Never miss a potential danger on your rides again! "
            },
            {
                image: "/Content/features/CB300F/Split_Seat.jpg",
                title: "SPLIT SEAT",
                description: "Ride in style with Split_Seat, the perfect accessory for your Honda bike! Enjoy the comfort and convenience of a split seat for ultimate versatility and a smoother ride. No more awkwardly squeezing onto one seat - Split_Seat has got you covered."
            },
            {
                image: "/Content/features/CB300F/Usb-C_Phone_Charger.jpg",
                title: "USB-C PHONE CHARGER",
                description: "Rev up your charging game with our Usb-C_Phone_Charger. Perfect for Honda bike riders, this charger is ready to hit the road with you. No more worrying about low battery on long rides, this charger will keep your phone juiced up and ready for the ride ahead!"
            },
            {
                image: "/Content/features/CB300F/Key_On_Tank.jpg",
                title: "KEY ON TANK",
                description: "Unlock the full potential of your Honda bike with Key_On_Tank! Say goodbye to fumbling for keys and hello to effortless convenience. With Key_On_Tank, you can easily start your ride and get on your way in no time. Upgrade your biking experience now!"
            },
            {
                image: "/Content/features/CB300F/Engine_Start_Stop_Switch1.jpg",
                title: "ENGINE START STOP SWITCH",
                description: "Get in control of your Honda bike with the Engine_Start_Stop_Switch1! This handy switch allows you to easily start and stop your engine, giving you the power to go on any adventure. No need to fiddle with keys or buttons, just flip the switch and you're ready to ride. (Disclaimer: Please do not attempt to use this switch on non-Honda bikes, trust us on this one.)"
            }
        ]

    },
    {
        id: 2,
        modelName: "CB300R",
        image: "/bikeImages/PEARL_SPARTAN_RED_dev22.png",
        
        gallery: [
            "/Content/Gallery/CB300R/Gallery1_dev1.jpg",
            "/Content/Gallery/CB300R/Gallery2_dev1.jpg",
            "/Content/Gallery/CB300R/Gallery3_dev1.jpg",
        ],
        about_specifications: "+The technical specifications and design of the vehicle may vary according to the requirements and conditions without any notice • Honda CB300R meets OBD-2A norms • Product shown in the picture may vary from actual product available in the market • *Conditions apply • Creative visualisation.",
        specifications: [
            {
                engine: {
                    "type": "Liquid-cooled, 4 Stroke, SI, BS-VI Engine",
                    "Displacement": "286.01 cc",
                    "Max engine output": "22.9 kW @ 9000 rpm",
                    "Max torque": "27.5 N-m @ 7500 rpm",
                    "Fuel system": "PGM-FI",
                    "Bore x stroke": "76.0 X 63.043 mm",
                    "Compression ratio": "10.7:1",
                    "Starting method": "Self start",
                },
            }, {
                dimensions: {
                    "Length": "2017mm",
                    "Width": "802mm",
                    "Height": "1047mm",
                    "Wheel base": "1352mm",
                    "Ground clearance": "157mm",
                    "Kerb weight": "146kg",
                    "Seat length": "627mm",
                    "Seat height": "801mm",
                    "Fuel tank capacity": "9.7 L"
                },
            },
            {
                transmission: {
                    "Clutch type": "Multi-plate wet clutch",
                    "No. of Gears": 6
                }
            },
            {
                tyresBreaks: {
                    "Tyre size & type (front)": " 110/70 R17 M/C 54H (Tubeless)",
                    "Tyre size & type (rear)": "150/60 R17 M/C 66H (Tubeless)",
                    "Brake type & size (front)": "Disc 296mm",
                    "Brake type & size (rear)": "Disc 220mm",
                    "ABS": "2 Channel ABS with IMU",
                }
            },
            {
                suspension: {
                    "Frame Type": "Diamond Type",
                    "Front Suspension": "USD",
                    "Rear Suspension": "7-Step Adjustable Monoshock"
                }
            },
            {
                electricals: {
                    "Battery": "12V, 6.0 Ah",
                    "Head Lamp": "LED"
                }
            }
        ],
        variants: [
            {
                name: "",
                price: "Rs.240000",
                colors: [
                    {
                        color: "PEARL SPARTAN RED",
                        link: "/bikeImages/PEARL_SPARTAN_RED_dev22.png"
                    },
                    {
                        color: "MATTE MASSIVE GREY",
                        link: "/bikeImages/Matte_Massive_Grey_dev22.png"
                    }
                ],

            },
        ],
        features: [
            {
                image: "/Content/features/CB300R/assist_and_slipper_clutch_dev1.jpg",
                title: "ASSIST AND SLIPPER CLUTCH",
                description: "Feel the thrill and rule the road with exceptional pickup and power delivered by 4 valve system that allows more air into the engine."
            },
            {
                image: "/Content/features/CB300R/Feature3.jpg",
                title: "FULLY DIGITALIZED LCD METER",
                description: "Effortlessly monitor your Honda bike's performance with our Fully Digitalized LCD Meter. Get accurate readings with the latest technology and stay on top of your bike's maintenance needs. Upgrade your riding experience with this essential tool for any bike enthusiast."
            },
            {
                image: "/Content/features/CB300R/Feature1.jpg",
                title: "ROUND SHAPE THIN LED HEADLIGHT",
                description: "Upgrade your Honda bike with our Round Shape Thin LED Headlight. Enjoy improved visibility and safety on the road with the bright and focused light. With its sleek and slim design, this headlight seamlessly blends with your bike's aesthetics. Stand out from the rest with our high-quality LED headlight."
            },
            {
                image: "/Content/features/CB300R/Feature2.jpg",
                title: "UPSIDE-DOWN FRONT SUSPENSION AND HUBLESS FLOATING DISC",
                description: "CB300R comes with 41mm golden upside down forks that provide excellent balance in all road conditions. Additionally, the 4-pot radial-mounted calipers with 296mm hubless floating disc for front brakes provide confidence in braking at any speed. Not to forget the first-in-class 'Inertial Measurement Unit (IMU) system’ in its Dual Channel ABS ensuring improved braking."
            },
            {
                image: "/Content/features/CB300R/Emergency_Stop_Signal_dev1.jpg",
                title: "EMERGENCY STOP SIGNAL",
                description: "The Emergency Stop Signal technology helps keep you safe if you ever need to hit the brakes unexpectedly. The system detects sudden braking and automatically activates the front and rear hazard lights, which flash to warn any nearby vehicles."
            },
            {
                image: "/Content/features/CB300R/Hazard_Switch_dev1.jpg",
                title: "HAZARD SWITCH",
                description: "The flashing indicator lights are an important safety feature for emergency stops & for low visibility conditions."
            }
        ]

    },
    {
        id: 3,
        modelName: "CB350",
        image: "/bikeImages/CB350/Pearl_Igneous_Black_dev1.png",
        price: "Rs.214800",
        gallery: [
            "/Content/Gallery/CB350/1_devs1.jpg",
            "/Content/Gallery/CB350/2_devs1.jpg",
            "/Content/Gallery/CB350/3_devs1.jpg",
            "/Content/Gallery/CB350/4_devs1.jpg",
            "/Content/Gallery/CB350/5_devs1.jpg",
            "/Content/Gallery/CB350/6_devs1.jpg",
            "/Content/Gallery/CB350/7_devs1.jpg",
            "/Content/Gallery/CB350/8_devs1.jpg",
            "/Content/Gallery/CB350/9_devs1.jpg",
            "/Content/Gallery/CB350/10_devs1.jpg",
        ],
        about_specifications: "+The technical specifications and design of the vehicle may vary according to the requirements and conditions without any notice • CB350 meets OBD-2B norms • Product shown in the picture may vary from actual product available in the market • All features and colours may not be part of all variants • **Conditions apply • Creative visualisation • Riding shots are shot in a controlled environment under expert supervision.",
        specifications: [
            {
                engine: {
                    "type": "4 Stroke, SI Engine	",
                    "Displacement": "348.36cc",
                    "Max engine output": "15.5kW @ 5500 rpm",
                    "Max torque": "29.4N-m @ 3000 rpm",
                    "Fuel system": "PGM-FI",
                    "Bore x stroke": "70.000mm X 90.519mm",
                    "Compression ratio": "9.5:1",
                    "Starting method": "Self start",
                },
            }, {
                dimensions: {
                    "Length": "2207mm",
                    "Width": "788mm",
                    "Height": "1110mm",
                    "Wheel base": "1441mm",
                    "Ground clearance": "165mm",
                    "Kerb weight": "187kg",
                    "Seat length": "687mm",
                    "Seat height": "800mm",
                    "Fuel tank capacity": "15.2 L"
                },
            },
            {
                transmission: {
                    "Clutch type": "Multi-plate wet clutch",
                    "No. of Gears": "5"
                }
            },
            {
                tyresBreaks: {
                    "Tyre size & type (front)": "100/90-19M/C 57H",
                    "Tyre size & type (rear)": "130/70-18M/C 63H",
                    "Brake type & size (front)": "Disc-310mm",
                    "Brake type & size (rear)": "Disc-240mm",
                    "Braking System": "Dual Channel ABS",
                }
            },
            {
                suspension: {
                    "Frame Type": "Diamond Type",
                    "Front Suspension": "Telescopic",
                    "Rear Suspension": "Hydraulic, Twin Shock"
                }
            },
            {
                electricals: {
                    "Battery": "12 V, 6.0 Ah",
                    "Headlamp/Taillamp": "LED"
                }
            }
        ],
        variants: [
            {
                name: "DLX",
                price: "Rs.214800",
                colors: [
                    {
                        color: "Pearl Igneous Black",
                        link: "/bikeImages/CB350/Pearl_Igneous_Black_dev1.png"
                    },
                ],

            },
            {
                name: "DLX PRO",
                price: "Rs.217800",
                colors: [
                    {
                        color: "Mat Dune Brown",
                        link: "/bikeImages/CB350/Mat_Crust_Metallic_dev1.png"
                    },
                    {
                        color: "Mat Crust Metallic",
                        link: "/bikeImages/CB350/Mat_Dune_Brown_dev3.png"
                    },
                    {
                        color: "Precious Red Metallic",
                        link: "/bikeImages/CB350/Precious_Red_Metallic_dev1.png"
                    },
                    {
                        color: "Mat Marshal Green Metallic",
                        link: "/bikeImages/CB350/Mat_Marshal_Green_Metallic_dev1.png"
                    },
                    {
                        color: "Pearl Igneous Black",
                        link: "/bikeImages/CB350/Pearl_Igneous_Black_dev-3.png"
                    }
                ],

            }, 
            // {
            //     name: "CUSTOMIZATION",
            //     price:"",
            //     colors: [
            //         {
            //             color: "SOLO CARRIER CUSTOM",
            //             link: "/bikeImages/CB350/Solo_Carrier_Custom_dev3.png"
            //         },
            //         {
            //             color: "COMFORT CUSTOM",
            //             link: "/bikeImages/CB350/Tourer_Custom_dev2.png"
            //         }
            //     ],

            // },
        ],
        features: [
            {
                image: "/Content/features/CB350/Assist_Slipper_Clutch_dev1.jpg",
                title: "Robust Tank Aesthetic",
                description: "Fueling Passion, Ignite your enthusiasm and experience the raw might beneath your grasp with the bulky tank design of the CB350, exuding an unmistakable aura of strength and dominance."
            },
            {
                image: "/Content/features/CB350/Robust_Tank_Aesthetic_dev1.jpg",
                title: "Assist Slipper Clutch",
                description: "SEAMLESS CONTROL, EFFORTLESS RIDING. Experience effortless clutch control with the assist function and prevent rear wheel hopping while downshifting with the slipper function."
            },
            {
                image: "/Content/features/CB350/Dual_Channel_ABS_dev1.jpg",
                title: "Dual Channel ABS",
                description: "ALWAYS IN CONTROL.The CB350 boasts dual-channel ABS, featuring a large 310mm front disc brake and a 240mm rear disc brake to maintain control even in emergency braking situations."
            },
            {
                image: "/Content/features/CB350/ESS_Emergency_Stop_Signal_dev1.jpg",
                title: "(ESS)Emergency Stop Signal",
                description: "ALWAYS KEEPS YOU SAFE, Honda’s emergency stop signal not only keeps you safe but extends its protection to fellow riders on the road."
            },
            {
                image: "/Content/features/CB350/Front_Suspension_Cover_Long_Muffler_dev1.jpg",
                title: "Front Suspension Cover & Long Muffler",
                description: "Timeless Aesthetic, Elevating its strong and massive stance, the front suspension proudly wears metallic covers on its upper part. The long chrome muffler serves as the authentic soul of the CB350’s retro design."
            },
            {
                image: "/Content/features/CB350/Full_LED_Headlamp_dev1.jpg",
                title: "Full LED Headlamp and Tail Lamp with Fire Ring Type LED Winkers",
                description: "LIGHT UP YOUR ROUTE, Illuminate your journey with these circular full LED headlamps and fire ring-type LED winkers, adding a touch of class to your ride."
            },
            {
                image: "/Content/features/CB350/Hazard_Switch_dev1.jpg",
                title: "Hazard Switch",
                description: "SAFETY IN FLASH, Flashing indicator lights provide a crucial safety feature for emergency stops and low visibility situations."
            },
            {
                image: "/Content/features/CB350/Honda_Selectable_Torque_Control_HSTC_dev1.jpg",
                title: "Honda Selectable Torque Control(HSTC)",
                description: "POWERING YOUR RIDE WITH ENHANCED SECURITY, The HSTC system maintains tire-to-surface traction, preventing slips and enhancing control."
            },
            {
                image: "/Content/features/CB350/Split_Seat_dev1.jpg",
                title: "Split Seat",
                description: "COMFORT MEETS ELEGANCE, The split seat design gives a retro touch and provide the ultimate comfort for both the riders."
            },
            {
                image: "/Content/features/CB350/Side_Stand_with_Engine_dev1.jpg",
                title: "Side Stand with Engine Inhibitor",
                description: "STAND BOLD, RIDE ON. No looking down to check your side stand, a glance on your meter is enough. Additionally, the inhibitor function restricts the engine from starting if the side stand is down."
            }
        ]

    },
    {
        id: 4,
        modelName: "H’nessCB350",
        image: "/bikeImages/HnessCB350/Precious_Red_Metallic_newcb350.png",
        price: "Rs.209857",
        gallery: [
            "/Content/Gallery/HnessCB350/cb350_gall_1_new8.jpg",
            "/Content/Gallery/HnessCB350/cb350_gall_2_new8.jpg",
            "/Content/Gallery/HnessCB350/cb350_gall_3_new8.jpg",
            "/Content/Gallery/HnessCB350/cb350_gall_4_new8.jpg",
            "/Content/Gallery/HnessCB350/cb350_gall_5_new8.jpg",
        ],
        about_specifications: "+The technical specifications and design of the vehicle may vary according to the requirements and conditions without any notice • H’ness CB350 meets OBD-2B norms • Product shown in the picture may vary from actual product available in the market • All features and colours may not be part of all variants • **Conditions apply • Creative visualisation • Riding shots are shot in a controlled environment under expert supervision.",
        specifications: [
            {
                engine: {
                    "type": "4 Stroke, SI Engine",
                    "Displacement": "348.36cc",
                    "Max Net Power": "15.5kW @ 5500 rpm",
                    "Max Net torque": "30N-m @ 3000 rpm",
                    "Fuel system": "PGM-FI",
                    "Bore x stroke": "70.000mm X 90.519mm",
                    "Compression ratio": "9.5:1",
                    "Starting method": "Self start",
                },
            }, {
                dimensions: {
                    "Length": "2163 mm",
                    "Width": "789 mm",
                    "Height": "1107 mm",
                    "Wheel base": "1441 mm",
                    "Ground clearance": "166 mm",
                    "Kerb weight": "181 kg",
                    "Seat length": "628 mm",
                    "Seat height": "800 mm",
                    "Fuel tank capacity": "15 L"
                },
            },
            {
                transmission: {
                    "Clutch type": "Multi-plate wet clutch",
                    "No. of Gears": "5"
                }
            },
            {
                tyresBreaks: {
                    "Tyre size & type (front)": "100/90-19M/C 57H",
                    "Tyre size & type (rear)": "130/70-18M/C 63H",
                    "Brake type & size (front)": "Hydraulic, Disc 310mm",
                    "Brake type & size (rear)": "Hydraulic, Disc 240mm",
                    "Braking System": "Dual Channel ABS",
                }
            },
            {
                suspension: {
                    "Frame Type": "Half Duplex Cradle",
                    "Front Suspension": "Telescopic",
                    "Rear Suspension": "Twin - Hydraulic"
                }
            },
            {
                electricals: {
                    "Battery": "12 V, 6.0 Ah",
                    "Headlamp": "LED"
                }
            }
        ],
        variants: [
            {
                name: "DLX",
                price:"Rs.217800",
                colors: [
                    {
                        color: "Precious Red Metallic",
                        link: "/bikeImages/HnessCB350/Precious_Red_Metallic_newcb350.png"
                    },
                ],

            },
            {
                name: "DLX PRO",
                price:"Rs.212856",
                colors: [
                    {
                        color: "Mat Marshall Green Metallic",
                        link: "/bikeImages/HnessCB350/Mat_Marshal_Green_Metallic_newcb350.png"
                    },
                ],

            },
            {
                name: "DLX PRO CHROME",
                price:"Rs.214856",

                colors: [
                    {
                        color: "Athletic Blue Metallic",
                        link: "/bikeImages/HnessCB350/Athletic_Blue_Metallic_newcb350.png"
                    },
                ],

            },
            // {
            //     name: "CUSTOMIZATION",
            //     price:"Rs.216356",
            //     colors: [
            //         {
            //             color: "CAFE RACER CUSTOM",
            //             link: "/bikeImages/HnessCB350/CAFE_RACER_CUSTOM.png"
            //         },
            //         {
            //             color: "COMFORT CUSTOM",
            //             link: "/bikeImages/HnessCB350/COMFORT_CUSTOM.png"
            //         },
            //         {
            //             color: "SOLO CARRIER CUSTOM",
            //             link: "/bikeImages/HnessCB350/SOLO_CARRIER_CUSTOM.png"
            //         },
            //         {
            //             color: "TOURER CUSTOM",
            //             link: "/bikeImages/HnessCB350/TOURER_CUSTOM.png"
            //         }
            //     ],

            // },
        ],
        features: [
            {
                image: "/Content/features/HnessCB350/Full_LEDHeadlamp_And_TailLamp_Ring_Type_Winkers.jpg",
                title: "FULL LED HEADLAMP AND TAILLAMP WITH FIRE RING TYPE LED WINKERS",
                description: "Find royalty in style. Take on the roads with elegance and class with these round-shaped full lead headlamps and fire ring-type LED winkers."
            },
            {
                image: "/Content/features/HnessCB350/Powerful_350cc_Engine_new5.jpg",
                title: "POWERFUL 350cc ENGINE",
                description: "Power up your ride. The mighty 350cc air-cooled, 4-stroke OHC single-cylinder engine is here for smooth acceleration and elevating the joy of riding."
            },
            {
                image: "/Content/features/HnessCB350/Main-Shaft-Coaxial-Balancer.jpg",
                title: "MAIN SHAFT COAXIAL BALANCER",
                description: "H’ness CB 350 uses a weight that has been added on the main shaft located in the rear of cylinder to balance the position and mass with the balancer shaft located in the front of the cylinder to eliminate vibrations."
            },
            {
                image: "/Content/features/HnessCB350/The_Majestic_Overall_Design_new5.jpg",
                title: "THE MAJESTIC OVERALL DESIGN",
                description: "Stripped down and blacked out with an aggressive stance, this motorcycle is a MODERN TAKE ON THE CLASSIC STYLE. The massive shaped design of the H’ness CB 350 radiates true royalty and its evergreen style is a manifestation of Honda’s originality."
            },
            {
                image: "/Content/features/HnessCB350/Extended_Fenders_new7.jpg",
                title: "Extended Fenders",
                description: "Increase your Honda bike's protection with our Extended Fenders. Made specifically for Honda bikes, these fenders provide extra coverage, shielding your bike from dirt, debris, and road grime. Made with durable materials and easy to install, keep your bike looking and performing its best with Extended Fenders."
            }
        ]

    },
    {
        id: 5,
        modelName: "CB350RS",
        image: "/bikeImages/CB350RS/Mat_Massive_Grey_Metalic.png",
        price: "",
        gallery: [
            "/Content/Gallery/CB350RS/Gallery1_new8.jpg",
            "/Content/Gallery/CB350RS/Gallery2_new8.jpg",
            "/Content/Gallery/CB350RS/Gallery3_new8.jpg",
            "/Content/Gallery/CB350RS/Gallery4_new8.jpg",
            "/Content/Gallery/CB350RS/Gallery5_new8.jpg",
            "/Content/Gallery/CB350RS/Gallery6_new8.jpg",
        ],
        about_specifications: "+The technical specifications and design of the vehicle may vary according to the requirements and conditions without any notice • Honda CB350RS meets OBD-2B norms • Product shown in the picture may vary from actual product available in the market • **Conditions apply • *Creative visualisation. Riding shots are shot in a controlled environment under expert supervision.",
        specifications: [
            {
                engine: {
                    "type": "4 Stroke, SI Engine",
                    "Displacement": "348.36cc",
                    "Max Net Power": "15.5kW @ 5500 rpm",
                    "Max Net torque": "30N-m @ 3000 rpm",
                    "Fuel system": "PGM-FI",
                    "Bore x stroke": "70.000mm X 90.519mm",
                    "Compression ratio": "9.5:1",
                    "Starting method": "Self",
                },
            }, {
                dimensions: {
                    "Length": "2171 mm",
                    "Width": "782 mm",
                    "Height": "1097 mm",
                    "Wheel base": "1441 mm",
                    "Ground clearance": "168 mm",
                    "Kerb weight": "179 kg",
                    "Seat length": "640 mm",
                    "Seat height": "800 mm",
                    "Fuel tank capacity": "15 L"
                },
            },
            {
                transmission: {
                    "Clutch type": "Multi-plate wet clutch",
                    "No. of Gears": "5"
                }
            },
            {
                tyresBreaks: {
                    "Tyre size & type (front)": "100/90-19M/C 57H",
                    "Tyre size & type (rear)": "150/70-17M/C 69H",
                    "Brake type & size (front)": "Hydraulic, Disc 310mm",
                    "Brake type & size (rear)": "Hydraulic, Disc 240mm",
                    "Braking System": "Dual Channel ABS",
                }
            },
            {
                suspension: {
                    "Frame Type": "Half Duplex Cradle",
                    "Front Suspension": "Telescopic",
                    "Rear Suspension": "Hydraulic"
                }
            },
            {
                electricals: {
                    "Battery": "12 V, 6.0 Ah",
                    "Headlamp": "LED"
                }
            }
        ],
        variants: [
            {
                name: "DLX",
                price:"Rs.214856",
                colors: [
                    {
                        color: "Mat Massive Grey Metallic",
                        link: "/bikeImages/CB350RS/Mat_Massive_Grey_Metalic.png"
                    },
                ],

            },
            {
                name: "DLX PRO",
                price:"Rs.217857",
                colors: [
                    {
                        color: "Radiant Red Metallic",
                        link: "/bikeImages/CB350RS/Radient_Red_Metallic.png"
                    }
                ],

            },
            {
                name: "DLX PRO DUAL TONE",
                price:"Rs.217857",
                colors: [
                    {
                        color: "Black with Pearl Sports Yellow",
                        link: "/bikeImages/CB350RS/Black_with_Pearl_Sports_Yellow.png"
                    }
                ],

            },
            // {
            //     name: "CUSTOMIZATION",
            //     price:"Rs.219357",
            //     colors: [
            //         {
            //             color: "CAFE RACER CUSTOM",
            //             link: "/bikeImages/CB350RS/Athletic_Blue_Metallic.png"
            //         },
            //         {
            //             color: "SUV CUSTOM",
            //             link: "/bikeImages/CB350RS/Black_with_Pearl_Sports_Yellow_Custom_23.png"
            //         }
            //     ],

            // },
        ],
        features: [
            {
                image: "/Content/features/CB350RS/Designed_For_All_Stories.jpg",
                title: "DESIGNED FOR ALL STORIES",
                description: "With a massive sporty design and aggressive styling, this motorcycle has taken the classic styling and added a modern twist. Truly elegant and contemporary, the design calls out for the ones who are looking for a motorcycle to live their story in style."
            },
            {
                image: "/Content/features/CB350RS/Dual_channel_ABS_new8.jpg",
                title: "DUAL TONE FUEL TANK",
                description: "The strikingly good-looking dual tone fuel tank sports the Honda badge, a perfect blend of the CB legacy and futuristic design."
            },
            {
                image: "/Content/features/CB350RS/PIN-Striping On Fuel Tank.jpg",
                title: "PIN-STRIPING ON FUEL TANK",
                description: "The pin-striping adds yet another dimension to this aesthetically crafted fuel tank on the Honda CB350RS."
            },
            {
                image: "/Content/features/CB350RS/7yshaped_front_alloy_wheel_new8.jpg",
                title: "7Y-SHAPED FRONT ALLOY WHEEL",
                description: "Enhance the look and performance of your Honda bike with our 7Y-shaped front alloy wheel. Made from high-quality materials, this wheel offers durability and improved handling. Its unique design adds a stylish touch to your ride. Upgrade your bike today with our 7Y-shaped front alloy wheel."
            },
            {
                image: "/Content/features/CB350RS/Headlamp_Ring_new8.jpg",
                title: "HEADLAMP RING",
                description: "Add a ring to your story. This ring headlamp will not only mark your presence on the road but will amp up your style quotient as well."
            },
            {
                image: "/Content/features/CB350RS/Your_Story_Shines_With_Chrome_new8.jpg",
                title: "YOUR STORY SHINES WITH CHROME",
                description: "With Chrome Every story is unique and so is this motorcycle, with the intelligent use of chrome on the rear-view mirrors that makes sure that heads will always turn when you pass by."
            },
            {
                image: "/Content/features/CB350RS/Led_Headlamp_And_Underseat_Tail_Lamp_new8.jpg",
                title: "LED HEADLAMP AND UNDERSEAT LED TAIL LAMP WITH EYE-SHAPED LED WINKERS",
                description: "Get noticed. Designed to add class and style to your every move. Looks so cool that you just canʼt get your eyes off it."
            },
            {
                image: "/Content/features/CB350RS/GRAB_Rail_new8.jpg",
                title: "SPORTY GRAB RAIL",
                description: "Everything sporty. Even the smallest parts of this motorcycle bring out its sporty nature.  Designed with precision and expertise, this grab rail is the perfect addition to your bike. Enhance your safety and control with the SPORTY GRAB RAIL."
            },
            {
                image: "/Content/features/CB350RS/Rear_Footrest_With_Muffler.jpg",
                title: "REAR FOOTREST WITH MUFFLER HEAT PROTECTOR",
                description: "Stories only get better with company, and this rear footrest with muffler heat protector gives added protection."
            },
            {
                image: "/Content/features/CB350RS/Tuck&_Roll_Seat_new8.jpg",
                title: "TUCK & ROLL SEAT",
                description: "May you find comfort in every story. These seats are designed with extra comfort and cushioning to make your rides smoother and more comfortable."
            },
            {
                image: "/Content/features/CB350RS/SKID_PLATE.jpg",
                title: "SKID PLATE",
                description: "The skid plate provides extra protection for the engine as you effortlessly ride through your story."
            },
            {
                image: "/Content/features/CB350RS/Riding_Position.jpg",
                title: "YOUR STORY SHINES WITH CHROME",
                description: "The riding position is crucial for every chapter of your story. Keeping that in mind, the Honda CB350RS has an aggressive yet comfortable riding stance."
            },
            {
                image: "/Content/features/CB350RS/Smoked_black_sporty_new8.jpg",
                title: "SMOKED BLACK SPORTY FRONT AND REAR FENDER",
                description: "Feels light, looks sporty from every side. The sporty rear and front fender makes the motorcycle lighter while maintaining its sporty look."
            },
            {
                image: "/Content/features/CB350RS/Front_fork_boots_new8.jpg",
                title: "FRONT FORK BOOTS",
                description: "Rugged and real. The fork boots on the front suspension add a rugged look to this modern roadster."
            }
        ]

    },
    {
        id: 6,
        modelName: "NX500",
        image: "/bikeImages/NX500/nx500_red_bike_two.png",
        price: "",
        gallery: [
            "/Content/Gallery/NX500/Gallery1.jpg",
            "/Content/Gallery/NX500/Gallery2.jpg",
            "/Content/Gallery/NX500/Gallery3.jpg"
        ],
        about_specifications: "",
        specifications: [
            {
                engine: {
                    "type": "Liquid-cooled 4-stroke DOHC parallel twin",
                    "Displacement": "471cc",
                    "Max Power": "35kW @ 8600 rpm",
                    "Max torque": "43N-m @ 6500 rpm",
                    "Fuel system": "PGM-FI",
                    "Bore x stroke": "67mm x 66.8mm",
                    "Compression ratio": "10.7:1"
                },
            }, {
                dimensions: {
                    "Length": "2165 mm",
                    "Width": "829 mm",
                    "Height": "1413 mm",
                    "Wheel base": "1447 mm",
                    "Ground clearance": "181 mm",
                    "Kerb weight": "196 kg",
                    "Fuel tank capacity": "17.5 L"
                },
            },
            {
                transmission: {
                    "Starting method": "Self",
                    "Clutch type": "Wet multiplate",
                    "No. of Gears": "6"
                }
            },
            {
                tyresBreaks: {
                    "Tyre size & type (front)": "110/80R 19M/C (59H)",
                    "Tyre size & type (rear)": "160/60R 17M/C (69H)",
                    "Brake type & size (front)": "Dual Disc 296mm",
                    "Brake type & size (rear)": "Single Disc 240mm",
                    "Brakes": "Dual Channel ABS with ESS",
                }
            },
            {
                suspension: {
                    "Frame Type": "Diamond Steel",
                    "Front Suspension": "Showa 41mm USD Forks",
                    "Rear Suspension": "Prolink Monoshock"
                }
            },
            {
                electricals: {
                    "Battery": "12V, 7.4 Ah",
                    "Head lamp/ tail lamp": "LED"
                }
            }
        ],
        variants: [
            {
                name: "",
                price:"Rs.590000",
                colors: [
                    {
                        color: "GRAND PRIX RED",
                        link: "/bikeImages/NX500/nx500_red_bike_two.png"
                    },
                    {
                        color: "PEARL HORIZON WHITE",
                        link: "/bikeImages/NX500/Pearl_Horizon_White_three.png"
                    },
                    {
                        color: "MAT GUNPOWDER BLACK METALLIC",
                        link: "/bikeImages/NX500/nx500_black_bike_two.png"
                    }
                ],

            }
        ],
        features: [
            {
                image: "/Content/features/NX500/Advanced_Display_Technology_one.jpg",
                title: "ADVANCED DISPLAY TECHNOLOGY",
                description: "Fully Connected Colour TFT Display, Enhancing the riding experience with cutting-edge optical bonding technology, the 5-inch display not only reduces glare but also boasts intuitive operation. It seamlessly integrates smartphone connectivity through Honda Roadsync."
            },
            {
                image: "/Content/features/NX500/Aerodynamic_Design_one.jpg",
                title: "AERODYNAMIC DESIGN",
                description: "Massive Fuel Tank, The 17.5L massive fuel tank not only extends your journey but pairs seamlessly with wide handlebars for ultimate control. All of this is integrated into an aerodynamic design that neatly channels airflow."
            },
            {
                image: "/Content/features/NX500/Enhanced_Visibility_one.jpg",
                title: "ENHANCED VISIBILITY",
                description: "Powerful New Headlight, Commanding attention with a strong beam penetration, the powerful headlight ensures broad light distribution on either side, significantly enhancing visibility for confident night-time cornering and exploration."
            },
            {
                image: "/Content/features/NX500/Smartphone_Integration_one.jpg",
                title: "SMARTPHONE INTEGRATION",
                description: "Honda RoadSync, A first-in-class mobile app for both Android and iOS, it opens up a world of possibilities – from on-screen turn-by-turn navigation to managing calls and enjoying music, all while enjoying your journey."
            },
            {
                image: "/Content/features/NX500/Traction_Management_one.jpg",
                title: "TRACTION MANAGEMENT",
                description: "Honda Selectable Torque Control (HSTC), Masterfully handling rear wheel traction across varied road conditions, especially in rainy weather. For off-road adventures on dirt or gravel, the traction control can be switched off completely, unleashing maximum driving power."
            },
            {
                image: "/Content/features/NX500/Utmost_Comfort_Suspensions_one.jpg",
                title: "UTMOST COMFORT SUSPENSIONS",
                description: "The advanced suspension technology, the 41mm Separate Function-Big Piston (Showa SFF-BP) forks promise precision, reduced sliding resistance, with dual discs for powerful braking."
            },
        ]

    },
    {
        id: 7,
        modelName: "TRANSALP",
        image: "/bikeImages/TRANSALP/Ross_White_dev2.png",
        price: "",
        gallery: [
            "/Content/Gallery/TRANSALP/Gallery1_dev1.jpg",
            "/Content/Gallery/TRANSALP/Gallery2_dev1.jpg",
            "/Content/Gallery/TRANSALP/Gallery3_dev1.jpg",
            "/Content/Gallery/TRANSALP/Gallery4_dev1.jpg",
            "/Content/Gallery/TRANSALP/Gallery5_dev1.jpg",
            "/Content/Gallery/TRANSALP/Gallery6_dev1.jpg",
            "/Content/Gallery/TRANSALP/Gallery7_dev1.jpg",
            "/Content/Gallery/TRANSALP/Gallery8_dev1.jpg",
            "/Content/Gallery/TRANSALP/Gallery9_dev1.jpg",
        ],
        about_specifications: "",
        specifications: [
            {
                engine: {
                    "type": "OHC(Uni-cam) liquid-cooled inline two-cylinder",
                    "Displacement": "755cc",
                    "Max Power": "67.5kW @ 9500rpm",
                    "Max torque": "75N-m @ 7250 rpm",
                    "Fuel system": "Fuel Injection",
                    "Bore x stroke": "87.0 x 63.5",
                    "Compression ratio": "11.0 + 2",
                    "Valve System": "8 Valve",
                    "No. of cyclinders": "2"
                },
            }, {
                dimensions: {
                    "Dimensions (LxWxH)": "2325mm X 838mm X 1450mm",
                    "Wheel base": "1560 mm",
                    "Ground clearance": "212 mm",
                    "Kerb weight": "208 kg",
                    "Fuel tank capacity": "16.9 L"
                },
            },
            {
                transmission: {
                    "Starting method": "Self",
                    "Clutch type": "Wet multiplate assist and slipper clutch",
                    "No. of Gears": "6"
                }
            },
            {
                tyresBreaks: {
                    "Tyre size & type (front)": "90/90-21M/C (54H)",
                    "Tyre size & type (rear)": "150/70R18M/C(70H)",
                    "Brake type & size (front)": "Dual 310mm Disc",
                    "Brake type & size (rear)": "Single 256mm Disc",
                    "Braking System": "2 Channel ABS",
                }
            },
            {
                suspension: {
                    "Frame Type": "Diamond (steel pipe)",
                    "Suspension": "Telescopic / Swing arm (ProLink",
                }
            },
            {
                electricals: {
                    "Battery rating (Ah)": "12V, 9.1Ah",
                    "Head lamp/ tail lamp": "LED"
                }
            }
        ],
        variants: [
            {
                name: "",
                price:"Rs.1099990",
                colors: [
                    {
                        color: "Ross White",
                        link: "/bikeImages/TRANSALP/Ross_White_dev2.png"
                    },
                    {
                        color: "Matte Ballistic Black Metallic",
                        link: "/bikeImages/TRANSALP/Matte_Ballistic_Black_Metallic_dev2.png"
                    }
                ],

            }
        ],
        features: [
            {
                image: "/Content/features/TRANSALP/ADVance_TECHNOLOGY_dev1.jpg",
                title: "ADVANCED TECHNOLOGY",
                description: "90.5bhp (67.5kW) power and 75Nm torque are strong numbers, no doubt. But it’s the way the 755cc, 8 valve parallel twin-cylinder engine delivers you’ll really notice. Our patented air vortex intake technology amplifies and smooths low- and mid-range response, while the cylinders use high-specification Ni-SiC plating to reduce friction and increase power at high rpm."
            },
            {
                image: "/Content/features/TRANSALP/LIGHT_WEIGHT_NIMBLE_dev1.jpg",
                title: "LIGHT WEIGHT NIMBLE",
                description: "Built to go the distance and genuine comfort matters – for two, so it’s good to be prepared. Handling is light, nimble and confidence inspiring, from dirt tracks to green lanes, long-travel Showa suspension absorbs bumps, while the front and rear wheel combination roll smoothly over rough terrain. An 850mm seat height and 208kg kerb weight make the TRANSALP easy to manage from walking pace upwards;the riding position is relaxed yet sits you upright, offering great visibility and natural comfort."
            },
            {
                image: "/Content/features/TRANSALP/Ready_to_ride_rough_dev1.jpg",
                title: "READY TO RIDE ROUGH",
                description: "Compact and highly functional, the fairing and screen feature aerodynamics carefully sculpted to increase stability and reduce wind noise and buffeting at speed."
            },
            {
                image: "/Content/features/TRANSALP/RIDING_MODES_dev1.jpg",
                title: "RIDING MODES",
                description: "Four default riding modes – Sport, Standard, Rain and Gravell make it easy for most riding conditions and alter the level of engine power and braking, Honda Selectable Torque Control (HSTC), Wheelie Control and level of ABS intervention. User mode allows your custom preference of each parameter (including rear ABS switch-off, off-road) and management is via a 5-inch TFT screen."
            },
            {
                image: "/Content/features/TRANSALP/Stay_Connected_And_Safe_On_The_Road_dev1.jpg",
                title: "STAY CONNECTED AND SAFE ON THE ROAD",
                description: "Honda Smartphone Voice Control system keeps you connected while you ride and full LED lighting features Emergency Stop Signal (ESS) technology to alert road users behind of sudden braking."
            }
        ]

    },
    {
        id: 8,
        modelName: "GOLDWING",
        image: "/bikeImages/GOLDWING/Black_Goldwing_dev23.png",
        price: "",
        gallery: [
            "/Content/Gallery/GOLDWING/Goldwing-1.jpg",
            "/Content/Gallery/GOLDWING/Goldwing-2.jpg",
            "/Content/Gallery/GOLDWING/Goldwing-3.jpg",
            "/Content/Gallery/GOLDWING/Goldwing-4.jpg",
        ],
        about_specifications: "+The technical specifications and design of the vehicle may vary according to the requirements and conditions without any notice• Honda Gold Wing Tour meets OBD-2A norms • Product shown in the picture may vary from actual product available in the market • Conditions apply ‘ Creative visualisation.",
        specifications: [
            {
                engine: {
                    "type": "Liquid-cooled 4 Stroke 24 valve SOHC Flat-6",
                    "Displacement": "1,833cc",
                    "Valves per Cylinder": "4",
                    "Bore x stroke": "73mm x 73mm",
                    "Compression ratio": "10.5:1",
                    "Max. Power Output": "93kW/5500rpm",
                    "Max. Torque": "170Nm/4500rpm",
                    "Oil Capacity": "5.6L(DCT)",
                    "CO2 Emissions": "127g/km",
                    "Carburettor": "PGM-FI Electronic Fuel Injection",
                    "Throttle Bore": "50 mm",
                    "Air Cleaner": "Viscous, cartridge type paper filter",
                    "Fuel Tank Capacity": "21.1 L"
                },
            }, 
            {
                dimensions: {
                    "Length(mm)	": "2,615mm",
                    "Width(mm)": "DCT 905mm",
                    "Height(mm)": "1,430mm",
                    "Wheelbase": "1695mm",
                    "Caster Angle": "30.5°",
                    "Trail": "109mm",
                    "Turning Radius": "3.4mm",
                    "Seat Height": "745mm",
                    "Ground Clearance": "130mm",
                    "Kerb Weight": "DCT with Air Bag 390kg"
                },
            },
            {
                transmission: {
                    "Clutch Type": "(DCT) Hydraulic, wet, multiplate with oil pressure	",
                    "Transmission Type": "7-speed forward and reverse DCT",
                    "Primary Reduction": "1.795 (79/44)",
                    "Gear Ratios": "(DCT) 1st: 2.167 2 nd : 1.696 3 rd : 1.304 4 th : 1.038 5 th : 0.821 6 th : 0.667 7 th : 0.522 Rev: 1.190",
                    "Final Reduction": "Engine side 0.972 Rear Wheel side 2.615",
                    "Final Drive": "Enclose Shaft",
                }
            },
            {
                tyresBreaks: {
                    "Tyre size & type (front)": "130/70R18 M/C 63H",
                    "Tyre size & type (rear)": "200/55R16 M/C 77H",
                    "Brake type & size (front)": "320mm x 4.5mm dual hydraulic disc with 6-piston calliper, floating rotors and sintered metal pads",
                    "Brake type & size (rear)": "316mm x 11mm ventilated disc with 3-piston calliper and sintered metal pads",
                }
            },
            {
                suspension: {
                    "Frame Type": "Aluminium Die-Cast, twin tube",
                    "Type Front": "Double Wishbone",
                    "Type Rear": "Pro Link"
                }
            },
            {
                electricals: {
                    "Starter": "Integrated Starter Generator system",
                    "Battery Capacity": "12V/20AH",
                    "ACG Power Generation Capacity": "12V/120A"
                }
            }
        ],
        variants: [
            {
                name: "",
                price:"Rs.4011202",
                colors: [
                    {
                        color: "Graphite Black",
                        link: "/bikeImages/GOLDWING/Black_Goldwing_dev23.png"
                    }
                ],

            }
        ],
        features: [
            {
                image: "/Content/features/GOLDWING/goldwing_four_feat_dev23.jpg",
                title: "",
                description: `- AIRBAG EQUIPPED
                - THE ELECTRIC SCREEN                
                - CRUISE CONTROL WITH TBW AND RIDING MODES                
                - NAVIGATION WITH APPLE ANDROIDTM AND CARPLAYTM`
            },
            {
                image: "/Content/features/GOLDWING/The-Taut-Style_dev23.jpg",
                title: "THE NEW TAUT STYLING",
                description: "The Gold Wing Tour’s lines exude a honed, athletic ethos. Its styling presents a unique silhouette and counterpoints comfort with the dynamic abilities of chassis and engine — completing the traditional Gold Wing premium level of fit, finish and materials. Gold Wing’s ‘face’ is daringly forward-slanting; combined with the compact fairing proportions, it presents an energetic frontal signature. The key line of the body, stretching front to back, highlights the differing upper and lower bodywork functions. A central element is the fairing, with its sharp and solid flat surfaces, and its nuanced aerodynamic detailing. Adding a tension that hints at the performance potential on offer. Also, on display is the motorcycle itself, on the whole — the double wishbone front suspension, flat six-cylinder engine and the exhausts — in all their functional beauty. Drawn together, the design elements create cutting edge style, underpinned by incredible levels of engineering and electronics."
            },
            {
                image: "/Content/features/GOLDWING/Trunk-Capacity-Expansion.jpg",
                title: "THE ELECTRIC SCREEN",
                description: "An extended electric screen operated from the left handlebar provides excellent wind protection yet, at the same time, a sense of space and freedom when required. Screen angle and height adjustment is step-less. Available as options are a larger screen, a fully adjustable deflector for the arms and upper body, and fixed deflectors for the lower legs and feet."
            },
            {
                image: "/Content/features/GOLDWING/Seating-Comfort.jpg",
                title: "SEATING COMFORT",
                description: "The rider and the pillion are separated comfortably on the seat, allowing the rider to enjoy a total focus on riding the bike. The rider’s seat shape is supportive, allowing and easy ground reach, while the pillion gets to enjoy a relaxing backrest that is adjustable from 16° to 23°. All of this with a luxurious leather seat cover."
            },
            {
                image: "/Content/features/GOLDWING/Trunk-CapacityExpansion.jpg",
                title: "TRUNK CAPACITY EXPANSION",
                description: "Gold Wing now comes with an increased trunk capacity from 5O to 61L (34mm, width 48mm, and height 46mm to rear). All this extra space will let you store two XXL sized helmets with an intercom much comfortably ¡n the given space."
            },
            {
                image: "/Content/features/GOLDWING/Navigation-with-Carplay.jpg",
                title: "NAVIGATION WITH APPLE CARPLAYTM AND ANDROID AUTOTM",
                description: "The navigation system on Gold Wing is displayed on a 7-inch full-colour TFT liquid crystal display screen in the central area of the instruments, and it includes a gyrocompass – which means guidance is continued even inside a tunnel. It also allows cancellation of any waypoint or go home instruction operation while riding. You can now do a thoroughly detailed journey planning with the all updated maps that offer the possibility of entering up to 99 different waypoints. And in other news, the Gold Wing Tour is compatible with Apple CarPlayTM and Android AutoTM, so you can utilised the personalised information and content from your smartphone, such as telephone numbers and music playlists. Bluetooth connectivity has been adopted too, and there are two USB type-C sockets to plug in to."
            },
            {
                image: "/Content/features/GOLDWING/Cruise_control_withTBW.jpg",
                title: "CRUISE CONTROL WITH TBW AND RIDING MODES",
                description: "When riding, the speed that’s been set with the Cruise Control Switch (located on the right handlebar) is shown in the bottom left area of the speedometer. Through TBW [Throttle By Wire), the system achieves a smooth transition to the specified speed and an ultra-smooth operation, especially when going uphill. In case of the manual transmission models, squeezing the clutch or brake, or twisting the throttle cancels Cruise Control. For the DCT variant [in AT mode) after completing the deceleration with the Cruise Control System in operation — and resuming the previous speed — the Gold Wing returns to the pre-set with an appropriate shifting schedule."
            },
            {
                image: "/Content/features/GOLDWING/Full-LED.jpg",
                title: "FULL LED ILLUMINATION",
                description: "All lighting is LED and the Gold Wing Tour is equipped with dual LED fog lights. The lower portion of the headlights uses 5 polished optical lenses on both sides to create a Jewel-Eye low beam light signature. While using high beam (in the upper portion), ¡t creates a stereoscopic impression. The front indicators are housed in the mirrors and the indicators also auto-cancel; the system compares front and rear wheel speed difference and calculates when to cancel the indication relative to the riding situation."
            },
            {
                image: "/Content/features/GOLDWING/Airbag_equipped_dev23.jpg",
                title: "AIRBAG EQUIPPED",
                description: "The Gold Wing Tour pioneered the concept of the motorcycle Airbag within a motorcycle more than 15 years ago. Available exclusively on Gold Wing Tour DCT, the inclusion of the airbag ensures rider safety."
            },
            {
                image: "/Content/features/GOLDWING/Tyre_Pressure_Measuring_system_dev23.jpg",
                title: "TYRE PRESSURE MEASURING SYSTEM",
                description: "The Gold Wing Tour now comes equipped with the Tyre pressure monitoring system (TPMS) to ensure you can be aware of any changes in tyre pressure wherever you are. Available on the Gold Wing Tour, the TPMS readout can be found on the 7-inch full-colour TFT display."
            }
        ]

    }
]

export { bannerImages, bikeImages, gallaryImage, bikeData, features, bikeSDetails };
