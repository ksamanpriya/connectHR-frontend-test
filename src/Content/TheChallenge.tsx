import {UnorderedListOutlined} from "@ant-design/icons";
import {Button, Card, Select, Tag} from "antd";
import React, {useEffect, useState} from "react";
import {TagComponent} from "../ParallelComponents/TagComponent";
import MyButton from "../ParallelComponents/ButtonComponent";

const TheChallenge = () => {
    const [users, setUsers] = useState<Array<any>>([]);

    useEffect(() => {
    }, []);


    return (<Card className={'card-style the-challenge'}
                  title={<div><UnorderedListOutlined className={'header-icon'}/> <span
                      className={'header-text'}>The Challenge</span></div>}>
        <div className={'card-text '}>
            <ul>
                <li>Congratulations if you have done all the preparations, you have already
                    completed 50% of the challenge.
                </li>
                <li>Change the icons of all the headers
                    <ul>
                        <li><strong>Welcome to Connect HR</strong>: {` <FaRegHandshake/>`}
                        </li>
                        <li><strong>Get Prepared</strong>: {` <PiCoffeeLight/>`}</li>
                        <li><strong>The Challenge</strong>: {` <LiaListAltSolid/>`}</li>
                        <li><strong>You are Brilliant!</strong>: {` <LiaTrophySolid/>`}</li>
                    </ul></li>
                <li>When I click <Button size={'small'} type={'primary'}>This</Button> I want <Tag
                    color={'red'}>This</Tag> color change to Green
                </li>
                <li style={{padding: 5}}>
                    Call this end point https://jsonplaceholder.typicode.com/users and then
                    populate this drop down id as value and name as label <Select
                    style={{width: 120}}
                    options={users}
                /> and then when I select any user from the drop down the name should reflect here <Tag
                    color={'processing'}>{`Hi My Name Is ${'selected name'}`}</Tag>
                </li>
                <li>When I click <MyButton/> I want <TagComponent/> color change to Red
                </li>
                <li>Create a view to display all the companies from the backend. I want to navigate to that page by
                    clicking <strong>This</strong> and it should be open in a new tab
                </li>
            </ul>
        </div>
    </Card>)
}
export default TheChallenge;