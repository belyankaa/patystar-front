'use client'

import React, {useState} from 'react';
import styles from  './AddPost.module.scss';
import Input from "@/components/input/Input";
import Toogle from "@/components/toogle/Toogle";

const AddPost = () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [isEndTime, setIsEndTime] = useState(false);
    const [isAgeDownLimit, setIsAgeDownLimit] = useState(false);
    const [isAgeUpLimit, setIsAgeUpLimit] = useState(false);
    const [isMaxParticipants, setIsMaxParticipants] = useState(false);

    function use() {
        //Заглушка для инпутов
    }

    return (
        <section className={styles.AddPostPage}>
            <div className={styles.header}>
                <div className={styles.backButton}>Назад</div>
                <div className={styles.title}>Новое мероприятие</div>
                <div className={styles.nextButton}>Вперед</div>
            </div>
            <div className={styles.imageImitate}></div>

            <div className={styles.border}></div>

            <div className={styles.preTitle}>Основные данные</div>
            <div className={styles.input}>
                <Input placeholder="Название" counter={true} maxLetters={30}
                       onChange={() => use()}/>
            </div>
            <div className={styles.row}>
                <div>
                    Место
                </div>
                {/*todo доделать */}
                Локация
            </div>
            <div className={styles.row}>
                <div>
                    Начало
                </div>
                {/*todo доделать */}
                Дата
            </div>
            <div className={styles.row}>
                <div>
                    Конец
                </div>
                <div>
                    {isEndTime && /*todo доделать */ 'Дата'}
                    <Toogle active={isEndTime} setActive={(e) => setIsEndTime(e)}/>
                </div>
            </div>
            <div className={styles.input}>
                <Input placeholder="Описание" type="area" areaHeight={200}
                       counter={true} maxLetters={500} onChange={() => use()}/>
            </div>

            <div className={styles.border}></div>

            <div className={styles.preTitle}>Доп. параметры</div>
            <div className={styles.row}>
                <div>
                    Лимит по возрасту (мин)
                </div>
                <div>
                    {isAgeDownLimit && /*todo доделать */ 'Коунтер'}
                    <Toogle active={isAgeDownLimit} setActive={(e) => setIsAgeDownLimit(e)}/>
                </div>
            </div>
            <div className={styles.row}>
                <div>
                    Лимит по возрасту (макс)
                </div>
                <div>
                    {isAgeUpLimit && /*todo доделать */ 'Коунтер'}
                    <Toogle active={isAgeUpLimit} setActive={(e) => setIsAgeUpLimit(e)}/>
                </div>
            </div>
            <div className={styles.row}>
                <div>
                    Макс. кол-во участников
                </div>
                <div>
                    {isMaxParticipants && /*todo доделать */ 'Коунтер'}
                    <Toogle active={isMaxParticipants} setActive={(e) => setIsMaxParticipants(e)}/>
                </div>
            </div>
            <div className={styles.row}>
                <div>
                    Приватное
                </div>
                <div>
                    <Toogle active={isPrivate} setActive={(e) => setIsPrivate(e)}/>
                </div>
            </div>
        </section>
    );
};

export default AddPost;