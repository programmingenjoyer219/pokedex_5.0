<script>
    var { numberOfPages, currentPageIndex = $bindable(0) } = $props();
    var currentPageNumber = $derived(currentPageIndex + 1);

    function gotoPreviousPage() {
        if (currentPageNumber == 1) return;
        currentPageIndex -= 1;
    }

    function gotoNextPage() {
        if (currentPageNumber == numberOfPages) return;
        currentPageIndex += 1;
    }
</script>

{#snippet leftArrowIcon()}
    <svg
        aria-hidden="true"
        class="left-arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        ><path
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
        ></path></svg
    >
{/snippet}

{#snippet rightArrowIcon()}
    <svg
        aria-hidden="true"
        class="right-arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        ><path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path></svg
    >
{/snippet}

<div class="pagination">
    <button
        onclick={gotoPreviousPage}
        title="previous page"
        disabled={currentPageNumber == 1}
    >
        <span class="sr-only">Go to previous page</span>
        {@render leftArrowIcon()}
    </button>

    <p class="page-number">Page {currentPageNumber} of {numberOfPages}</p>

    <button
        onclick={gotoNextPage}
        title="next page"
        disabled={currentPageNumber == numberOfPages}
    >
        <span class="sr-only">Go to next page</span>
        {@render rightArrowIcon()}
    </button>
</div>

<style>
    .left-arrow-icon,
    .right-arrow-icon {
        height: 1rem;
        width: 1rem;
        color: white;

        @media (width > 600px) {
            height: 1.25rem;
            width: 1.25rem;
        }
    }

    .pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;
    }

    .page-number {
        font-size: var(--h5);

        @media (width > 600px) {
            font-size: var(--h4);
        }
    }

    button {
        display: grid;
        place-content: center;
        padding: 0.5rem;
        background-color: var(--clr-blue-500);

        @media (width > 600px) {
            padding: 0.75rem;
        }
    }
</style>
