import styles from "./SimpleSettingsForm.module.css";
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useConfigSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { patchSettings } from "../../store/slices";

interface Controls {
  intelliHide: boolean;
  backgroundImage: string;
}

export const SimpleSettingsForm = () => {
  const { register, handleSubmit } = useForm<Controls>();
  const dispatch = useDispatch();

  const bgImage = useConfigSelector<string>("backgroundImage");
  const isIntelliHide = useConfigSelector<boolean>("isIntelliHideDock");

  const onSubmit = (data: Controls) => {
    if (data.backgroundImage) {
      dispatch(
        patchSettings({
          backgroundImage: data.backgroundImage,
        })
      );
    }

    dispatch(
      patchSettings({
        isIntelliHideDock: data.intelliHide,
      })
    );
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup style={{ marginBottom: "15px" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked={isIntelliHide} {...register("intelliHide")} />}
            label="Intelli hide Dock"
          />

          {bgImage && (
            <TextField
              label="Background image"
              variant="outlined"
              size="small"
              defaultValue={bgImage}
              {...register("backgroundImage")}
            />
          )}
        </FormGroup>

        <Button variant="contained" size="small" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
