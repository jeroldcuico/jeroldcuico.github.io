export function newFeature() {
  return `
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content rounded-4 shadow">
              <div class="modal-body p-5">
                <h4 class="fw-bold mb-0">Having trouble taking your cases?</h4>
                <ul class="d-grid gap-4 my-5 list-unstyled small">
                  <li class="d-flex gap-4 item-start">
                    <i class="bi bi-suit-heart-fill fs-1 text-danger"></i>
                    <div>
                      <h5 class="mb-0">Just relax</h5>
                      Dehydrate and meditate
                    </div>
                  </li>
                  <li class="d-flex gap-4 items-center">
                    <i class="bi bi-bookmark-heart fs-1 text-warning"></i>
                    <div>
                      <h5 class="mb-0">Prioritize urgent ones</h5>
                      Finish easier cases while planning for the hard ones.
                    </div>
                  </li>
                  <li class="d-flex gap-4 items-center">
                    <i class="bi bi-file-earmark-person-fill fs-1 text-success"></i>
                    <div>
                      <h5 class="mb-0">Post to APAC Case Assist</h5>
                      I will try my best to assist. 
                    </div>
                  </li>
                  <li class="d-flex gap-4 items-center">
                    <i class="bi bi-emoji-heart-eyes-fill text-danger rotatecases fs-1"></i>
                    <div>
                      <h5 class="mb-0">REMINDER</h5>
                      Close your cases that you're sure of and 2 or more days on pending! 😊
                    </div>
                  </li>
                </ul>
                <button type="button" class="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Great, thanks!</button>
              </div>
            </div>
      </div>
    </div>
    `;
}
