import React from 'react';

const NewTicket = () => {

    return (
        <main>
            <form>
                <h2>Open New Ticket</h2>
                <label>Ticket Title:
                    <input type="text" />
                </label>
                <label>
                    <select>
                        <option>Choose A Department</option>
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                    </select>
                </label>
                <label>
                    <textarea></textarea>
                </label>
                <label>Choose files to upload.
                    <input type="file" accept=".png, .jpg, .jpeg" multiple/>
                </label>
                <input type="submit" />
            </form>
        </main>
    )
}

export default NewTicket;