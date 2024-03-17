import React from 'react'
import './document.css'
import { Helmet } from 'react-helmet';


const Document = () => {

    const data = [
        {
            id: 1,
            month: 'August, 2012',
            entries: 3,
            days: [
                {
                    id: 1,
                    date: '21, Tuesday',
                    title: 'Job Created',
                    description: 'Loss Type: A/C Leak',
                },
                {
                    id: 2,
                    date: '23, Tuesday',
                    title: 'Job Created',
                    description: 'Loss Type: A/C Leak',
                }
            ]


        }
    ];


    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <div className="container">
                <div className="timeline">
                    {data.map((month, index) => (
                        <>
                            <div key={index} className="timeline-month">
                                {month.month}
                                <span>3 Entries</span>
                            </div>
                            {month.days.map((day) => (
                                <div class="timeline-section">
                                    <div key={day.id} class="timeline-date">
                                        {day.date}
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            {/* {day.map((entry) => ())} */}
                                            <div class="timeline-box">
                                                <div class="box-title">
                                                    <i class="fa fa-asterisk text-success" aria-hidden="true"></i> Job Created
                                                </div>
                                                <div class="box-content">
                                                    <a class="btn btn-xs btn-default pull-right">Details</a>
                                                    <div class="box-item"><strong>Loss Type</strong>: A/C Leak</div>
                                                    <div class="box-item"><strong>Loss Territory</strong>: Texas</div>
                                                    <div class="box-item"><strong>Start Date</strong>: 08/22/2018</div>
                                                </div>
                                                <div class="box-footer">- Tyler</div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Document