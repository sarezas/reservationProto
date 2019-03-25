import { StylistModel } from './stylist.model';

export class SchedulerModel {
    year: number;
    month: string;
    stylists: {
        stylists: {
            stylist1: {
                name: string,
                hours: [
                    {
                        time: '13:00',
                        client: string
                    },
                    {
                        time: '13:30',
                        client: string
                    },
                    {
                        time: '14:00',
                        client: string
                    },
                    {
                        time: '14:30',
                        client: string
                    },
                    {
                        time: '15:00',
                        client: string
                    },
                    {
                        time: '15:30',
                        client: string
                    },
                    {
                        time: '16:00',
                        client: string
                    },
                    {
                        time: '16:30',
                        client: string
                    },
                    {
                        time: '17:00',
                        client: string
                    },
                    {
                        time: '17:30',
                        client: string
                    },
                    {
                        time: '18:00',
                        client: string
                    },
                    {
                        time: '18:30',
                        client: string
                    }
                ]
            }
            stylist2: {
                name: string,
                hours: [
                    {
                        time: '13:00',
                        client: string
                    },
                    {
                        time: '13:30',
                        client: string
                    },
                    {
                        time: '14:00',
                        client: string
                    },
                    {
                        time: '14:30',
                        client: string
                    },
                    {
                        time: '15:00',
                        client: string
                    },
                    {
                        time: '15:30',
                        client: string
                    },
                    {
                        time: '16:00',
                        client: string
                    },
                    {
                        time: '16:30',
                        client: string
                    },
                    {
                        time: '17:00',
                        client: string
                    },
                    {
                        time: '17:30',
                        client: string
                    },
                    {
                        time: '18:00',
                        client: string
                    },
                    {
                        time: '18:30',
                        client: string
                    }
                ]
            },
            stylist3: {
                name: string,
                hours: [
                    {
                        time: '13:00',
                        client: string
                    },
                    {
                        time: '13:30',
                        client: string
                    },
                    {
                        time: '14:00',
                        client: string
                    },
                    {
                        time: '14:30',
                        client: string
                    },
                    {
                        time: '15:00',
                        client: string
                    },
                    {
                        time: '15:30',
                        client: string
                    },
                    {
                        time: '16:00',
                        client: string
                    },
                    {
                        time: '16:30',
                        client: string
                    },
                    {
                        time: '17:00',
                        client: string
                    },
                    {
                        time: '17:30',
                        client: string
                    },
                    {
                        time: '18:00',
                        client: string
                    },
                    {
                        time: '18:30',
                        client: string
                    }
                ]
            }
        }
    };
    // week: {
    //     monday: {
    //         stylists: {
    //             stylist1: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //             stylist2: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             },
    //             stylist3: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //         }
    //     },
    //     tuesday: {
    //         stylists: {
    //             stylist1: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //             stylist2: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             },
    //             stylist3: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //         }
    //     },
    //     wednesday: {
    //         stylists: {
    //             stylist1: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //             stylist2: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             },
    //             stylist3: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //         }
    //     },
    //     thursday: {
    //         stylists: {
    //             stylist1: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //             stylist2: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             },
    //             stylist3: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //         }
    //     },
    //     friday: {
    //         stylists: {
    //             stylist1: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //             stylist2: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             },
    //             stylist3: {
    //                 name: string,
    //                 hours: [
    //                     {
    //                         time: '13:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '13:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '14:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '15:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '16:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '17:30',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:00',
    //                         client: string
    //                     },
    //                     {
    //                         time: '18:30',
    //                         client: string
    //                     }
    //                 ]
    //             }
    //         }
    //     }
    // };

    // constructor(year: number, month: string, week: any) {
    //     this.year = year;
    //     this.month = month;
    //     this.week = week;
    // }
}
