<script>
  var { currentPageNumber, numberOfPages } = $props();
</script>

{#snippet leftArrowIcon()}
  <svg
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
    class="right-arrow-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path></svg
  >
{/snippet}

<section class="section pagination">
  <a
    href="#page-{currentPageNumber - 1}"
    title="previous page"
    class="button pagination-button"
    class:button-disabled={currentPageNumber == 1}
  >
    <span class="sr-only">Go to previous page</span>
    {@render leftArrowIcon()}
  </a>
  <p class="page-number">Page {currentPageNumber} of {numberOfPages}</p>
  <a
    href="#page-{currentPageNumber + 1}"
    title="next page"
    class="button pagination-button"
    class:button-disabled={currentPageNumber == numberOfPages}
  >
    <span class="sr-only">Go to next page</span>
    {@render rightArrowIcon()}
  </a>
</section>

<style>
  .left-arrow-icon,
  .right-arrow-icon {
    height: 1rem;
    width: 1rem;
    color: white;
  }

  .pagination-button {
    display: grid;
    place-content: center;
    padding: 0.5rem;

    background-color: var(--primary-color);
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }

  .page-number {
    font-size: var(--h5);
  }

  .button-disabled {
    visibility: hidden;
  }

  @media (min-width: 600px) {
    .left-arrow-icon,
    .right-arrow-icon {
      height: 1.25rem;
      width: 1.25rem;
    }

    .pagination-button {
      padding: 0.75rem;
    }

    .page-number {
      font-size: var(--h4);
    }
  }
</style>
